<template>
  <div id="app">
    this is other frame
  </div>
</template>

<script>
export default {
    name: "Other",
    data() {
        return {
            env: appGlobal.APP_NODE_ENV
        };
    }
};
</script>

<style scoped>
</style>