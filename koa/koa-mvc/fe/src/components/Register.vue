<template>
  <div>
    <input type="text" name="name" v-model="name">
    <input type="password" v-model="password">
    <button @click="login">注册</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name:'',
      password:''
    }
  },
  methods: {
    login(){
      axios.post('/api/v1/register',{
        name:this.name,
        password:this.password
      }).then(res => {
        console.log(res)
      })
    }
  },
}
</script>

<style>

</style>