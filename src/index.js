
import "@/plugin/apiclould.js";
import "@/assets/style/api.css";

window.apiready = function() {
    var header = window.$api.dom("header"); // 获取 header 标签元素
    var footer = window.$api.dom("footer"); // 获取 footer 标签元素

    // 1.修复开启沉浸式效果带来的顶部Header与手机状态栏重合的问题，最新api.js方法已支持适配iPhoneX；
    // 2.默认已开启了沉浸式效果 config.xml中 <preference name="statusBarAppearance" value="true"/>
    // 3.沉浸式效果适配支持iOS7+，Android4.4+以上版本
    var headerH = window.$api.fixStatusBar(header);
    // 最新api.js为了适配iPhoneX增加的方法，修复底部Footer部分与iPhoneX的底部虚拟横条键重叠的问题；
    var footerH = window.$api.fixTabBar(footer);

    window.api.openFrame({
        name: "main",
        url: "./main.html",
        bounces: true,
        rect: { // 推荐使用Margin布局，用于适配屏幕的动态变化
            marginTop: headerH, // main页面距离win顶部的高度
            marginBottom: footerH, // main页面距离win底部的高度
            w: "auto" // main页面的宽度 自适应屏幕宽度
        },
        pageParam: {
            headerH: headerH,
            footerH: footerH
        }
    });

    // 获取当前年份时间，并加载显示到页面
    const year = window.$api.byId("year");

    year.innerHTML = new Date().getFullYear();
};