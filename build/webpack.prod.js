const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: "production",
    module: {},
    plugins: [
        new CleanWebpackPlugin()
        // new BundleAnalyzerPlugin({
        //     analyzerPort: 8888
        // })
    ],
    output: {
        filename: "js/[name].[hash].js",
        path: path.resolve(__dirname, "../widget/dist"), // 这里有个坑，必须放在widget目录下vscode apicloud插件才能wifi同步
        publicPath: "./" // TODO 改为绝对路径
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    }
});