import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export default new Vuex.Store({
  state: {
    fighters: [],
    activeFighter: {}
  },
  mutations: {
    setActiveFighter(state, payload) {
      state.activeFighter = payload
    }
  },
  actions: {
    async getFighters({
      commit,
      dispatch
    }) {
      try {
        let res = await api.get('fighters')
        console.log(res)
        commit('setFighters', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addFighter({
      dispatch
    }, payload) {
      try {
        let res = await api.post('/fighters', payload)
        dispatch('getFighters')
      } catch (error) {
        console.error(error)
      }
    },
    async deleteFighter({
      dispatch
    }, payload) {
      try {
        let res = await api.delete('/cars/' + payload)
        dispatch('getFighters')
        router.push({
          name: 'fighters'
        })
      } catch (error) {
        console.error(error)
      }
    }
  }
})