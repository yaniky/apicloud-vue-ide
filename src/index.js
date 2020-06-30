
import "@/plugin/apiclould.js";
import "@/assets/style/api.css";

window.apiready = function() {
    window.api.openWin({
        name: "main",
        url: `${appGlobal.APP_ROOT}main.html`,
        useWKWebView: true
        // historyGestureEnabled: true,
        // softInputMode: "pan",
        // slidBackType: "edge",
        // softInputDismissMode: ["tap", "drag"]
    });
};