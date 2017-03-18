<template lang="html">
    <div class="rankList">
        <ul>
            <li v-for="(v,i) in rankList">{{i+1}}   {{v.name}}   {{v.score}}</li>
        </ul>
    </div>
</template>

<script>
import { get } from '../../services/index.js'
export default {
    data(){
        return {
            rankList:[]
        }
    },
    mounted(){
        // get('http://10.6.96.190:3000/rankList?_sort=score&_order=DESC&_limit=10').then(response => {
        //     this.rankList = response
        // })
        get('http://localhost:3000/rankList?_sort=score&_order=DESC&_limit=10').then(response => {
            this.rankList = response
        })
    }
}
</script>

<style lang="less" scoped>
.rankList{
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    width: 400px;
    height: 600px;
    margin: 100px auto;
    padding: 30px 0 0 20px;
    li{
        height: 30px;
        line-height: 30px;
        font-size: 18px;
    }
}
</style>
