<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'tab'
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function';
.tab
  display flex
  &-item
    flex 1
    height px2rem(80px)
    font-size 14px
    text-align center
    line-height px2rem(80px)
    color hsla(0,0%,100%,0.5)
    .tab-link
      padding-bottom 5px
    &.router-link-exact-active
      .tab-link
        color #ea2248
        border-bottom 2px solid #ea2248
</style>