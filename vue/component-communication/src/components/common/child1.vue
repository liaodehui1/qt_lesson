<template>
  <div>
    <h1>{{msg}}</h1>
    <h1>{{msg2}}</h1>
    <button @click="appfn">按钮</button>
    {{a}}
    {{b}}
    <p>------------------</p>
    <button @click="add1">+</button>
    {{count}}
  </div>
</template>

<script>

export default {
  props:['msg','msg2','appfn','a','b','count','add1'],
  methods: {
    add(){
      this.$emit('add')
    }
  },
}
</script>

<style lang="" scoped>
  
</style>