import Vue from "vue";
import App from "./Main.vue";
import "normalize.css";
import "@/plugin/apiclould.js";
import "@/assets/style/api.css";

window.apiready = function() {

    new Vue({
        el: "#app",
        render: h => h(App)
    });
};