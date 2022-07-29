<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{ completed : item.done}" v-for="item in $store.state.num.list" :key="item.id">
      <div class="view" >
        <input class="toggle" type="checkbox" v-model="item.done" />
        <label>{{item.name}}</label>
        <button class="destroy" @click="delBtn"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data(){
    return {
      message:''
    }
  },
  computed:{
  },
  methods:{
    ...mapMutations(['num/delBtns','num/addBtns']),
    delBtn(index){
       this['num/delBtns'](index)
    }
  }

}
</script>
