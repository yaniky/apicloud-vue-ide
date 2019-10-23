/**
 * @description 兼容ios键盘弹出容器
 * @author yaniky
 * @params {Number} headerHeight - header高度，单位px
 */
<template>
  <div
    v-cloak
    class="app-wrap"
    :style="{height: 'calc(100% - ' + keyPanelHeight + 'px)'}"
  >
    <slot name="header" />
    <div
      ref="pageWrap"
      class="page-wrap"
      :style="{top: headerHeight + 'px'}"
    >
      <slot />
    </div>
  </div>
</template>
<script>
export default {
    name: "Base",
    data() {
        return {
            keyPanelHeight: 0
        };
    },
    props: {
        marginKeyPanel: {
            type: Number,
            default: 10
        },
        headerHeight: {
            type: Number,
            default: 44
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

                    this.$refs.pageWrap.scrollBy(0, needScroll);

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
        top: 88rem;
        left: 0;
        width: 100%;
        bottom: 0;
        overflow: auto;
    }
}
</style>