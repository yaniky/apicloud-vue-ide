import Vue from "vue";
import Router from "vue-router";
import App from "./Main.vue";
import router from "@/route/main";
import store from "@/store/main";
import "normalize.css";
import "@/plugin/apiclould.js";
import "@/assets/style/api.css";
import { setRoot } from "@/assets/script/base.js";

function startVue() {
    setRoot();
    Vue.use(Router);

    new Vue({
        el: "#app",
        render: h => h(App),
        store,
        router
    });
}

if (appGlobal.APP_NODE_ENV === "web") {
    startVue();
} else {
    window.apiready = function() {
        startVue();
    };
}