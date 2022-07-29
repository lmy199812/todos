import Vue from 'vue'
import Vuex from 'vuex'
import num from './modules/num'
import color from './modules/color'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    num,
    color
  }
})
