<template>
  <div class="wrap">
    <base-container>
      <div
        class="header-container"
        :style="{paddingTop: safeTop + 'px'}"
      >
        <div
          class="back-btn"
          @click="_goBack"
        >
          back
        </div>
        header
      </div>
      <div class="page-container">
        this is next demo in {{ env }} env
      </div>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "@comp/common/container/Base.vue";

export default {
    name: "NextDemo",
    data() {
        return {
            safeTop: window.api ? window.api.safeArea.top : 0,
            env: appGlobal.APP_NODE_ENV
        };
    },
    methods: {
        _goBack() {
            this.$router.ani = -1;
            this.$router.back();
        }
    },
    components: {
        BaseContainer
    }
};
</script>

<style lang="scss" scoped>
 .wrap {
    .header-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.88rem;
        background: #000;
        color: #fff;
        text-align: center;
        font-size: 0.4rem;
        line-height: 0.88rem;

        .back-btn {
            position: absolute;
            left: 0.2rem;
            bottom: 0;
        }
    }

    .page-container {
        padding-top: 0.88rem;
    }
}
</style>