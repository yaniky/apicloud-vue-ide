const fs = require("fs");

const path = "src/page-entry";

let files = fs.readdirSync(path);

let content = "const HtmlWebpackPlugin = require(\"html-webpack-plugin\"); module.exports = { htmlPlugin: [";

files.forEach(function (item, index) {
    if (index !== 0) {
        content += ",";
    }
    content += "new HtmlWebpackPlugin({filename: \"" + item + ".html\",template: \"./public/main.html\",chunks: [\"" + item + "\"]})";
});

content += "], entries: {index: \"./src/index.js\"";

files.forEach(function (item) {
    content += "," + item + ": \"./src/page-entry/" + item + "/main.js\"";
});

content += "}}";

fs.writeFile("build/entryConfig.js",content,"utf8",function(error){
    if (error){
        return false;
    }
});