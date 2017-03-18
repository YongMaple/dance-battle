<template lang="html">
    <div class="playermodel">
        <img :src="'./static/player-'+action+'.png'">
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            action: 'default'
        }
    },
    props: ['actionNum'],
    watch: {
        actionNum() {
            if (!this.gameover) {
                switch (this.actionNum) {
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
            }
        }
    },
    computed: {
        ...mapGetters([
            'gameover'
        ])
    }
}
</script>

<style lang="less" scoped>
.playermodel {
    position: absolute;
    left: 15%;
    bottom: 20%;
}
</style>
