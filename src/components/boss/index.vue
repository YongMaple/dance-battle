<template lang="html">
    <div class="bossmodel">
        <img :src="'./static/boss-'+action+'.png'">
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            action:'default',   //动作
            actionNum: 0,       //动作对应keyCode
            intervalId: 0       //循环编号
        }
    },
    mounted() {
        let time = 2000
        let fun = () => {
            clearInterval(this.intervalId)
            if(time>500)
                time-=50
            let arr = [37, 38, 39, 40];
            if(this.actionNum != 0){
                for (let i = 0; i < 4; i++) {
                    if(arr[i] == this.actionNum)
                        arr.splice(i,1)
                }
            }
            let result = '';
            let len = 0;
            let index = 0;
            len = arr.length;
            index = Math.round(Math.random() * (len - 1));
            result = arr[index];
            this.actionNum = result
            this.SET_BOSS_ACTION(result)
            switch (result) {
                case 37:
                    this.action = 'left'
                    break;
                case 38:
                    this.action = 'top'
                    break;
                case 39:
                    this.action = 'right'
                    break;
                case 40:
                    this.action = 'bottom'
                    break;

            }
            this.intervalId = setInterval(fun, time)
        }
        setTimeout(() => {
            this.intervalId = setInterval(fun, time)
        }, 2000)
    },
    methods:{
        ...mapActions([
           'SET_BOSS_ACTION'
        ]),
    },
    computed:{
        ...mapGetters([
          'gameover'
        ])
    },
    watch:{
        gameover(){
            if(this.gameover){
                clearInterval(this.intervalId)
            }
        }
    }

}
</script>

<style lang="less" scoped>
.bossmodel {
    position: absolute;
    right: 15%;
    bottom: 20%;
}
</style>
