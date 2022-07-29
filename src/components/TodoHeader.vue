<template>
  <header class="header">
    <h1 :style="{color: color}">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      v-model="message"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="addDown"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {mapActions} = createNamespacedHelpers('num')
const {mapState} = createNamespacedHelpers('color') 
export default {
  data(){
    return{
      message:''
    }
  },
  methods: {
    addDown() {
      if(this.message!==''){
        this.addBtns(this.message)
        this.message = ''
      }
    },
    ...mapActions(['addBtns']),
  },
  computed:{
    ...mapState(['color'])
  }
}
</script>
