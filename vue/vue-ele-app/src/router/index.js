import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/Goods'
import ratings from '@/components/ratings/Ratings'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/ratings',
      component:ratings
    }
  ]
})
