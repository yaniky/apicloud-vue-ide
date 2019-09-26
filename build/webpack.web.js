const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");

let local;

try {
    local = require("./local.env");
} catch (e) {
    // do nothing
}

module.exports = merge(common, {
    mode: "development",
    module: {},
    devtool: "inline-source-map",
    devServer: {
        contentBase: false,
        port: local.port || 3000,
        disableHostCheck: true,
        host: local.host || "0.0.0.0",
        historyApiFallback: false,
        publicPath: "/"
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "../web/dist"),
        publicPath: "/"
    }
});