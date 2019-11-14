<template>
  <div id="app">
    <keep-alive>
      <transition
        v-if="$route.meta.keepAlive"
        @before-enter="_handleBeforeEnter"
        @enter="_handlePageEntry"
        @after-enter="_handlePageEntryActive"
        @before-leave="_handleBeforeLeave"
        @leave="_handleLeave"
        @after-leave="_handleAfterLeave"
      >
        <router-view v-if="$route.meta.keepAlive" />
      </transition>
    </keep-alive>
    <transition
      v-if="!$route.meta.keepAlive"
      @before-enter="_handleBeforeEnter"
      @enter="_handlePageEntry"
      @after-enter="_handlePageEntryActive"
      @before-leave="_handleBeforeLeave"
      @leave="_handleLeave"
      @after-leave="_handleAfterLeave"
    >
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
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
        _handleBeforeEnter(el) {
            // this.$router.ani > 0, 翻下一页动画， this.$router.ani < 0， 翻上一页动画
            if (this.$router.ani > 0) {
                el.classList.add("forward-wrap");
            } else if (this.$router.ani < 0) {
                el.classList.add("back-wrap");
            }
        },
        _handlePageEntry(el, done) {
            if (this.$router.ani > 0) {
                el.classList.add("forward-ani");
                setTimeout(function() {
                    done();
                }, 300);
            } else if (this.$router.ani < 0) {
                el.classList.add("back-ani");
                setTimeout(function() {
                    done();
                }, 300);
            } else {
                done();
            }
        },
        _handlePageEntryActive(el) {
            if (this.$router.ani > 0) {
                el.classList.remove("forward-ani");
                el.classList.remove("forward-wrap");
            } else if (this.$router.ani < 0) {
                el.classList.remove("back-ani");
                el.classList.remove("back-wrap");
            }
            this.$router.ani = 0;
        },
        _handleBeforeLeave(el) {
            if (this.$router.ani && this.$router.ani !== 0) {
                el.classList.add("keep-show");
            }
        },
        _handleLeave(el, done) {
            if (this.$router.ani && this.$router.ani !== 0) {
                setTimeout(function() {
                    done();
                }, 300);
            } else {
                done();
            }
        },
        _handleAfterLeave(el) {
            if (this.$router.ani && this.$router.ani !== 0) {
                el.classList.remove("keep-show");
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.forward-wrap {
    position: fixed;
    z-index: 99999;
    left: 100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
}
.forward-ani {
    animation: forwardAni 0.3s;
}
.back-wrap {
    position: fixed;
    z-index: 99999;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
}
.back-ani {
    animation: backAni 0.3s;
}
@keyframes forwardAni {
    from {
        left: 100%;
    }
    to {
        left: 0;
    }
}
@keyframes backAni {
    from {
        left: -100%;
    }
    to {
        left: 0;
    }
}
.keep-show {
    position: fixed;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
}
</style>