/**
 * @description 兼容ios键盘弹出容器
 * @author yaniky
 */
<template>
  <div>
    <div
      v-cloak
      class="app-wrap"
      :style="{height: 'calc(100% - ' + keyPanelHeight + 'px)', position: position}"
    >
      <slot name="header" />
      <div
        ref="pageWrap"
        class="page-wrap"
        :style="contentStyle"
      >
        <slot />
      </div>
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
export default {
    name: "Base",
    data() {
        return {
            keyPanelHeight: 0,
            safeTop: window.api ? window.api.safeArea.top : 0,
            safeBottom: window.api ? window.api.safeArea.bottom : 0
        };
    },
    props: {
        marginKeyPanel: {
            type: Number,
            default: 10
        },
        position: {
            type: String,
            default: "absolute"
        },
        isFooter: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        contentStyle() {
            return {
                paddingTop: `${this.safeTop}px`,
                paddingBottom: `${this.isFooter ? this.safeBottom : 0}px`
            };
        }
    },
    watch: {
        keyPanelHeight: {
            immediate: false,
            handler: "_handlerKeyPanelChange"
        }
    },
    mounted () {
        window.api.addEventListener({
            name: "keyboardshow"
        }, (ret) => {
            this.keyPanelHeight = ret.h;
        });
        window.api.addEventListener({
            name:"keyboardhide"
        }, () => {
            this.keyPanelHeight = 0;
        });
    },
    methods: {
        _handlerKeyPanelChange(val) {
            if (val > 0) {
                const { activeElement } = document;
                const winHeight = document.documentElement.offsetHeight || window.api.winHeight;
                const offsetBottom = winHeight - activeElement.getBoundingClientRect().bottom;

                if (offsetBottom < val) {
                    const needScroll = val - offsetBottom + this.marginKeyPanel;

                    setTimeout(() => {
                        this.$refs.pageWrap.scrollBy(0, needScroll);
                    }, 300);
                }
            }
        }
    }
};
</script>
<style lang="scss" scoped>
[v-cloak] {
    display: none;
}
.app-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .page-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        overflow: auto;
    }
}
</style>