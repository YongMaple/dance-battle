<template lang="html">
    <div class="background">
        <button class="startgame" type="button" @click="routerPush('game')">
            开始游戏
        </button>
        <button class="ranklist" type="button" @click="routerPush('rankList')">
            排行榜
        </button>
        <button class="rule" type="button" @click="routerPush('rule')">
            规则
        </button>
    </div>
</template>

<script>
export default {
    methods:{
        routerPush(path){
            this.$router.push({
                name:path
            })
        }
    }
}
</script>

<style lang="less" scoped>
    @import "./style.less";
</style>
