<template>
  <div id="app">
    <!-- 菜单列表 -->
    <Menulist :data="menuList"></Menulist>
  </div>
</template>

<script>
import Menulist from './components/MenuList'
import menuData from './assets/menu.js'
export default {
  name: 'App',
  data() {
    return {
      menuList:menuData
    }
  },
  components:{
    Menulist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
