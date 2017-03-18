import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        bossAction: 0,
        gameover:false
    },

    actions: {
        SET_BOSS_ACTION: ({ commit, dispatch, state }, payload) => {
            commit('SET_BOSS_ACTION', payload)
        },
        SET_GAMEOVER: ({ commit, dispatch, state }, payload) => {
            commit('SET_GAMEOVER', payload)
        },
    },

    mutations: {
        SET_BOSS_ACTION: (state, payload) => {
            state.bossAction = payload
        },
        SET_GAMEOVER: (state, payload) => {
            state.gameover = payload
        }
    },

    getters: {
        bossAction(state) {
            return state.bossAction
        },
        gameover(state) {
            return state.gameover
        }
    }
})

export default store
