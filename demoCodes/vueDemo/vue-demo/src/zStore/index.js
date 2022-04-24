import Vue from 'vue';
import ZVuex from './z-vuex'

Vue.use(ZVuex)

export default new ZVuex.Store({
  state: {
    counter: 1
  },
  mutations: {
    add (state) {
      state.counter++
    }
  },
  actions: {
    add ({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    }
  },
  modules: {}
})