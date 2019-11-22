const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const env = require("../config");
const tools = require("../config/tools");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const appEnv = tools.filterAppEnv(env);
const entryConfig = require("./entryConfig.js");

const plugins = [
    new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
        appGlobal: appEnv
    }),
    new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./public/index.html",
        chunks: ["index"]
    }),
    new CopyWebpackPlugin([
        {
            from: "static/**/*"
        },
        {
            from: "config.xml"
        },
        {
            from: "wgt/**/*"
        },
        {
            from: "icon/**/*"
        }
    ])
].concat(entryConfig.htmlPlugin);

module.exports = {
    entry: entryConfig.entries,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            fallback: {
                                loader:'file-loader',
                                options: {
                                    name: 'assets/images/[name].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            fallback: {
                                loader:'file-loader',
                                options: {
                                    name: 'assets/font/[name].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src"),
            "@comp": path.resolve(__dirname, "../src/components")
        },
        extensions: [".js", ".vue"]
    },
    plugins: plugins
};