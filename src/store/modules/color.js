export default {
  namespaced: true,
  state: {
    color: ''
  },
  mutations: {
    changeColor (state, color) {
      state.color = color;
    }
  },
  actions: {
    changeColor ({ commit }, color) {
      commit('changeColor', color)
    }
  }

}
