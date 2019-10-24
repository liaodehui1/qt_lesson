import Vue from 'vue'
import Router from 'vue-router'
import StarNotes from '@/components/StarNotes'
import StarBanner from '@/components/starBanner/StarBanner'
import StarLogin from '@/components/login/StarLogin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta:{
        title:'星辰笔记'
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      // alias:'/a', // 别名
      component: StarBanner,
      meta:{
        title:'欢迎'
      }
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: StarLogin,
      meta:{
        title:'登录'
      }
    },
  ]
})
