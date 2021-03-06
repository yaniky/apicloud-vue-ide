## 简介
- api vue 模板

## 开发
- yarn build构建
- yarn dev开发环境（需先执行一次yarn build）
- yarn hotdev 支持热更新(url 需已APP_ROOT为更目录，如`${appGlobal.APP_ROOT}main.html`, **需配置local.env.js devHost为本机ip**,如devHost: "http://192.168.1.113")
```txt
建议使用vscode或其他支持apicloud插件的编辑器

vscode可安装apicloud插件，设置Subdirectories到目录\widget\dist，可对构建后内容进行wifi同步
```
- yarn web 用于浏览器热更新开发界面

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

## 开始开发
- 在apicloud上创建项目,获得appid
- 修改config.xml中appid
- 在apicloud上生成自定义Loader
- 运行yarn web，在浏览器上快速开发页面
- 运行yarn dev启动开发服务
- 运行yarn hotdev启动热更新的开发服务
- 通过wifi同步在loader查看结果(hotdev 初次同步后续修改会热更新到loader上)
- 运行yarn build，生成正式包
- 将widget/dist下文件通过svn上传到apicloud平台，生成app

## 路由
- 支持使用apicloud 自身 openWin openFrame等方式（page-entry/other为演示demo）

- 支持使用vue-route(目前只支持hash路由模式)(page-entry/main为演示demo)
```js
window.api.openWin({
    name: "main",
    url: `${appGlobal.APP_ROOT}main.html`,
    useWKWebView: true,
    historyGestureEnabled: true,
    softInputMode: "pan",
    slidBackType: "edge",
    softInputDismissMode: ["tap", "drag"]
});
```

## 组件
- container/Base.vue
```txt
兼容ios软键盘弹出，导致页面整体上移，顶部栏离开可见区域问题,需要设置softInputMode为"pan"
```