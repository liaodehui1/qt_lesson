## 路由
1. 路由跳转  
  + 声明式 <router-link :to="...">
  + 函数式  
  跳转：  
    this.*$router*.push({path:'/',query:{'title':title}}) 地址栏会出现参数  
    this.$router.push({name:'组件路由名字（路由需要有name字段）',params:{'title':title}})  
  接收：  
    this.*$route*.query.title  
    this.$route.params.title
2. 设置页面title
```js
  // router配置
  meta:{
    title:'星辰笔记'
  }
  // mian.js配置
  router.beforeEach((to,from,next) => {
    document.title = to.meta.title
    next()
  })
```
3. 路由别名 alias:'' 

## 引入本地img
+ 使用require
+ 背景绑定
`:style="`background-image:url(${item.img})`"`