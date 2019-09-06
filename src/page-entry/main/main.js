import "@babel/polyfill";
import Vue from "vue";
import App from "./Main.vue";
import Router from "vue-router";
import router from "@/route/main";
import store from "@/store/main";
import "normalize.css";
import "@/plugin/apiclould.js";
import "@/assets/style/api.css";

window.apiready = function() {
    Vue.use(Router);

    new Vue({
        el: "#app",
        render: h => h(App),
        store,
        router
    });
};