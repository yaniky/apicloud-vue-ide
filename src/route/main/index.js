import Router from "vue-router";

const router = new Router({
    mode: "hash",
    routes: [
        {
            path: "/",
            redirect: "/hellow"
        },
        {
            path: "/hellow",
            name: "Hellow",
            component: () => import("../../page/main/Hellow.vue")
        },
        {
            path: "/next-demo",
            name: "NextDemo",
            component: () => import("../../page/main/NextDemo.vue")
        }
    ]
});

export default router;