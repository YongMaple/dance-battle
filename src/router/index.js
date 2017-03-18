import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index.vue'
import Game from '../views/game/index.vue'
import RankList from '../views/rankList/index.vue'
import Rule from '../views/rule/index.vue'

Vue.use(Router)
let router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [{
            name: 'index',       //名称
            path: '/',          //路径
            component: Index     //组件
        },
        {
            name: 'game',       //名称
            path: '/game',          //路径
            component: Game     //组件
        },
        {
            name: 'rankList',       //名称
            path: '/rankList',          //路径
            component: RankList     //组件
        },
        {
            name: 'rule',       //名称
            path: '/rule',          //路径
            component: Rule     //组件
        },
    ]
})
router.beforeEach((to, from, next) => {     //在每次路由跳转之前都会先执行其中的代码，再通过调用next()执行后续操作
    next()
})

router.afterEach((to, from) => {})      //每次路由跳转之后都会执行其中的代码
export default router
