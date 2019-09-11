import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/Goods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:goods
    }
  ]
})
