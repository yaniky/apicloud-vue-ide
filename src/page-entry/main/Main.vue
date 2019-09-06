<template>
  <div id="app">
    {{env}}
    <button style="background: red;" @click="toOther">to other</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      env: APP_NODE_ENV
    };
  },
  methods: {
    toOther() {
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
    }
  }
}
</script>

<style scoped>
</style>