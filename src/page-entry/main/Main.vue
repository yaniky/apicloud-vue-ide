<template>
  <div id="app">
    {{ env }}
    <button
      style="background: red;"
      @click="toOther"
    >
      to other
    </button>
    <router-view />
  </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            env: appGlobal.APP_NODE_ENV
        };
    },
    methods: {
        toOther() {
            window.api.openFrame({
                name: "other",
                url: "./other.html",
                rect: {
                    marginTop: window.api.pageParam.headerH,
                    marginBottom: window.api.pageParam.footerH,
                    w: "auto"
                },
                pageParam: {
                    name: "test"
                }
            });
        }
    }
};
</script>

<style scoped>
</style>