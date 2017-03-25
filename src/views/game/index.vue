<template lang="html">
    <div class="game-background" >
        <div class="gameoverCont" v-if="gameover">
            <div class="gameover">
                <br><br>
                GAME OVER<br><br>
                <span>留下大名吧</span><br>
                <input type="text" v-model="username"><br>
                <button type="button" name="button" @click="submit">提交</button>
            </div>

        </div>
        <div v-if="countdown >= 0" class="countdown">
            {{ countdown > 0 ? countdown : 'START' }}
        </div>
        <div class="hpCont">
            <div class="hp" :style="{width:hp+'%'}"></div>
        </div>
        <div class="score">
            {{score}}
        </div>
        <div class="combo" v-if="combo">
            COMBO  {{combo}}
        </div>
        <player :actionNum="actionNum"></player>
        <boss></boss>
    </div>
</template>

<script>
import Player from '../../components/player/index.vue'
import Boss from '../../components/boss/index.vue'
import { mapActions, mapGetters } from 'vuex'
import { post } from '../../services/index.js'
export default {
    data () {
        return {
            countdown: 3, // 倒计时
            score: 0, // 分数
            check: true, // 重复校验
            hp: 100, // 生命值
            combo: 0, // 连击
            omitCheck: false, // 遗漏校验
            username: '', // 用户名
            actionNum: 0 // 动作对应keyCode
        }
    },
    mounted () {
        document.onkeydown = (e) => {
            const keyCode = e.keyCode
            if (this.countdown === -1 && [37, 38, 39, 40].includes(keyCode) && !this.gameover) {
                this.actionNum = keyCode
                if (keyCode === this.bossAction && this.check) {
                    this.check = false
                    this.omitCheck = false
                    this.combo++
                    if (this.combo > 10) {
                        this.score += 200
                    } else {
                        this.score += 100
                    }
                } else if (keyCode !== this.bossAction) {
                    this.hp -= 10
                    this.combo = 0
                }
            }
        }
        const id = setInterval(() => {
            this.countdown--
        }, 1000)
        setTimeout(() => {
            clearInterval(id)
        }, 4000)
    },
    methods: {
        ...mapActions([
            'SET_GAMEOVER'
        ]),
        submit () {
            if (!this.username) {
                alert('啥都没填你点了干嘛？')
            } else {
                console.log(this.username)
                const parms = {
                    name: this.username,
                    score: this.score
                }
                post('http://10.6.96.190:3000/ranklist', parms).then(() => {
                    alert('添加成功')
                    this.$router.push({
                        name: 'rankList'
                    })
                })
            }
        }
    },
    watch: {
        bossAction () {
            if (this.omitCheck) {
                this.omitCheck = true
                this.combo = 0
                this.hp -= 10
            }
            this.omitCheck = true
            this.check = true
        },
        hp () {
            if (this.hp === 0) {
                this.SET_GAMEOVER(true)
            }
        }
    },
    computed: {
        ...mapGetters([
            'bossAction',
            'gameover'
        ])
    },
    components: {
        Player,
        Boss
    }
}
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
