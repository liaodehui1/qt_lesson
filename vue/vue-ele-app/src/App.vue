<template>
  <div id="app">
    <!-- 属性绑定 v-bind: -->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"/>
  </div>
</template>

<script>
// 导入header组件
import header from '@/components/header/Header'
import goods from '@/components/goods/Goods'
export default {
  name: 'App',
  data() {
    return {
      seller:{}//子组件要求为对象
    }
  },
  components:{
    'v-header':header,//为header重命名 防止冲突
    'goods':goods
  },
  //实例创建后 请求在mounted之前便可
  //为了节约时间 提前一点
  created(){
    //promise
    this.$http.get('http://127.0.0.1:8080/static/seller.json')
      .then(res=>{
        console.log('seller:',res)
        if(res.data.errno===0){
          //对象合并
          this.seller=Object.assign({},this.seller,res.data.data)
          //数组合并 concat
        }
      })
  }
}
</script>

<style lang="stylus">
  @import './common/stylus/mixin.styl'
  #app
    height 100vh
    overflow hidden
    .tab
      display flex
      text-align center
      height 40px
      line-height 40px
      &-item
        flex 1
        &>a
          color rgb(77,85,93)
          font-size 14px
          display block
          text-decoration none
          &.router-link-active
            color rgb(240,20,20)
            border-1px(rgb(240,20,20))
</style>
