<template>
  <div id="app">
    {{count}}
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  // data() {
  //   return {
      
  //   }
  // },
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  created() {
    // this.$store.state = {
    //   count:2
    // }
    console.log('打印出this.$store.getters.getStatePlusOne',this.$store.getters.getStatePlusOne)
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
