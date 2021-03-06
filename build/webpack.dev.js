const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");

module.exports = merge(common, {
    mode: "development",
    module: {},
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "../widget/dist"),
        publicPath: "./" // TODO 改为绝对路径
    }
});