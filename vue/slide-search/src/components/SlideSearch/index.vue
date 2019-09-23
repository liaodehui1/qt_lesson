<template>
  <div class="search-wrap" 
    :class="{'show-search':showSearchPage,'hidden-search':!showSearchPage}">
    <div class="title-wrap">
      <span>标题</span>
      <div>&gt;</div>
    </div>
    <div class="icon-back">
      <span>&lt;</span>
    </div>
    <div class="search-input" :class="{'show-search':showSearchPage}">
      <input type="text" class="search"/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    showSearchPage:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .search-wrap{
    z-index: 110;
    width: 100%;
    height: 94px;
    background-color: #fff;
    transition: all .2s linear;
  }
  .search-wrap.show-search{
    height: 52px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.1);
  }
  .search-wrap.hidden-search{
    box-shadow: none;
  }
  .title-wrap{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42px;
    text-align: center;
    margin-top: 10px;
  }
  .title-wrap div{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding-right: 10px;
  }
  .icon-back{
    position: absolute;
    left: 10px;
    top: 0;
    z-index: 110;
    height: 42px;
    margin-top: 10px;
  }
  .search-input{
    position: absolute;
    top: 52px;
    left: 0;
    z-index: 100;
    display: flex;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    transition: all .2s linear;
  }
  .search-input.show-search{
    top: 0px;
    left: 40px;
  }
  .search {
    border: 1px solid #eee;
    color: #666;
    width: 100%;
    height: 22px;
    background: transparent;
    font-size: 12px;
    margin-left: 10px;
    padding: 4px;
    border-radius: 5px;
  }
</style>