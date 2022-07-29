export default {
  namespaced: true,
  state: {
    list: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  mutations: {
    delBtns (state, payload) {
      state.list.splice(payload, 1)
    },
    addBtns (state, payload) {
      const arr = {}
      arr.name = payload
      arr.done = false
      arr.id = state.list.length + 1
      state.list.unshift(arr)
    }
  },
  actions: {
    addBtns (connext, payload) {
      connext.commit('addBtns', payload)
    }
  }

}
