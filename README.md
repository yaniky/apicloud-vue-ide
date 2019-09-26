## 简介
- api vue 模板

## 开发
- yarn build构建
- yarn dev开发环境（需先执行一次yarn build）
```txt
建议使用vscode或其他支持apicloud插件的编辑器

vscode可安装apicloud插件，设置Subdirectories到目录\widget\dist，可对构建后内容进行wifi同步
```
- yarn web 用于浏览器热更新开发界面

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