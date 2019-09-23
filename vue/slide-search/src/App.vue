<template>
  <div id="app">
    <SlideSearch :showSearchPage="showSearchPage"/>
    <ul class="main">
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
    </ul>
  </div>
</template>

<script>
import SlideSearch from './components/SlideSearch/index'

export default {
  name: 'App',
  components: {
    SlideSearch
  },
  data() {
    return {
      showSearchPage:false
    }
  },
  // 已经转为真实DOM
  mounted() {
    const ul = document.querySelector('.main')
    ul.addEventListener('scroll',()=>{
      if(ul.scrollTop === 0){
        this.showSearchPage = false
      }
      if(ul.scrollTop > 10){
        this.showSearchPage = true;
      }
    })
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul{
  height: calc(100vh - 94px);
  overflow: scroll;
}
li{
  margin-top: 20px;
}
</style>
