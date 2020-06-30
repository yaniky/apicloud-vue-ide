const pkg = require("../package.json");
const envConfig = require("./" + process.env.BUILD_ENV + "_env.js");

let local;

try {
    local = require("../build/local.env");
} catch (e) {
    // do nothing
}

const baseEnv = {
    APP_NAME: JSON.stringify(pkg.name),
    APP_ROOT: process.env.BUILD_DEV === "hot" ? (local && local.devHost ? JSON.stringify(local.devHost + ":" + (local.port || 3000) + "/") : JSON.stringify("http://127.0.0.1:3000/")) : JSON.stringify("widget://")
};

for (var i in envConfig) {
    baseEnv[i] = envConfig[i];
}

module.exports = baseEnv;