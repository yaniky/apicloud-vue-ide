## 简介
- api vue 模板

## 开发
- yarn build构建
- yarn dev开发环境（需先执行一次yarn build）
```txt
可使用apicloud-studio打开dist目录，设置自动wifi同步，在dev环境下可热更新
```

## 路由
- 支持使用vue-route(目前只支持hash路由模式)
```js
import "@babel/polyfill";
import Vue from "vue";
import App from "./Main.vue";
import Router from "vue-router";
import router from "@/route";
import store from "@/store";
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
```
- 支持使用apicloud openFrame等方式
```js
api.openFrame({
    name: 'other',
    url: './other.html',
    rect: {
        marginTop: api.pageParam.headerH,
        marginBottom: api.pageParam.footerH,
        w: "auto"
    },
    pageParam: {
        name: 'test'
    }
});
```

## 使用
- 新增页面需要在page-entry目录新建目录，目录名为新页面名称，目录下main.js为页面入口
```js
新增main.html页面
需要目录结构如下
page-entry
----main
--------main.js

构建后会在dist下出现main.html文件
```