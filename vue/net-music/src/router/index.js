import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/pages/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'Search',
      path:'/search',
      component:search
    }
  ]
})
