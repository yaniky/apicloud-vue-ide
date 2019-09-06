<template>
    <div class="wrap">
        Hellow, count is {{count}}
        <p>getter: {{doubleCount}}</p>
        <button style="border: 1px solid green;" @click="incrementIfOddOnRootSum">plus</button>
    </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers("hellow");
export default {
    name: "Hellow",
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
        ])
    }
}
</script>
<style lang="scss" scoped>
    .wrap {
        border: 1px solid #cccccc;
    }
</style>