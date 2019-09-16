<template>
  <div id="app">

    <child1 
      :msg="msg" 
      :msg2="msg2" 
      :appfn="appfn" 
      v-bind="test"
      :count="count"
      :add1="add1"></child1>
  </div>
</template>

<script>
import child1 from '@/components/common/child1'
export default {
  name: 'App',
  components:{
    child1
  },
  data() {
    return {
      msg:'给child1的礼物',
      msg2:'再次给child1礼物',
      test:{
        a:1,
        b:2
      },
      count:1
    }
  },
  methods: {
    appfn(){
      console.log('我是App.vue里面的方法')
    },
    add1(){
      // console.log('+')
      this.count++
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
