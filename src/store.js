import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'http://localhost:3000/api/fighters/5d708a893c98bd480ddce861'
})

export default new Vuex.Store({
  state: {
    activeFighter: {}
  },
  mutations: {
    setActiveFighter(state, fighter) {
      state.activeFighter = fighter
    }
  },
  actions: {
    async getFighters({
      commit
    }) {
      try {
        let res = await api.get('')
        console.log(res)
        commit('setActiveFighter', res.data)
      } catch (error) {
        console.error(error)
      }
    },
  }
})