<template>
  <div id="app">
    <!-- 属性绑定 v-bind: -->
    <v-header :seller="seller"></v-header>
    <router-view/>
  </div>
</template>

<script>
// 导入header组件
import header from '@/components/header/Header'
export default {
  name: 'App',
  data() {
    return {
      seller:{}//子组件要求为对象
    }
  },
  components:{
    'v-header':header//为header重命名 防止冲突
  },
  //实例创建后 请求在mounted之前便可
  //为了节约时间 提前一点
  created(){
    //promise
    this.$http.get('https://www.easy-mock.com/mock/5d721c013e50bc7e8e405415/vue_ele_app/vue-ele-seller')
      .then(res=>{
        console.log(res)
        if(res.data.errno===0){
          //对象合并
          this.seller=Object.assign({},this.seller,res.data.data)
          //数组合并 concat
        }
      })
  }
}
</script>

<style>

</style>
