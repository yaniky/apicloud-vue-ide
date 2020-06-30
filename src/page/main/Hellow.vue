<template>
  <div class="wrap">
    <base-container :is-footer="true">
      <div
        class="header-container"
        :style="{paddingTop: safeTop + 'px'}"
      >
        header
      </div>
      <div class="page-container">
        Hellow, count is {{ count }}
        <p>getter: {{ doubleCount }}</p>
        <button
          style="border: 1px solid green;"
          @click="incrementIfOddOnRootSum"
        >
          plus
        </button>
        <button
          style="border: 1px solid green;"
          @click="_toNext"
        >
          toNext
        </button>
      </div>
      <div
        slot="footer"
        class="footer-container"
        :style="{paddingBottom: safeBottom + 'px'}"
      >
        footer
      </div>
    </base-container>
  </div>
</template>
<script>
import BaseContainer from "@comp/common/container/Base.vue";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapGetters, mapActions } = createNamespacedHelpers("hellow");

export default {
    name: "Hellow",
    data() {
        return {
            safeTop: window.api ? window.api.safeArea.top : 0,
            safeBottom: window.api ? window.api.safeArea.bottom : 0
        };
    },
    computed: {
        ...mapState({
            count: state => state.count
        }),
        ...mapGetters([
            "doubleCount"
        ])
    },
    methods: {
        ...mapActions([
            "incrementIfOddOnRootSum"
        ]),
        _toNext() {
            // 注释部分为使用vue router
            // this.$router.ani = 1;
            // this.$router.push({
            //     name: "NextDemo"
            // });
            window.api.openWin({
                name: "other",
                url: `${appGlobal.APP_ROOT}other.html`,
                useWKWebView: true
            });
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
        }

        .page-container {
          padding-top: 0.88rem;
        }

        .footer-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.88rem;
          background: #000;
          color: #fff;
          text-align: center;
          font-size: 0.4rem;
          line-height: 0.88rem;
        }
    }
</style>