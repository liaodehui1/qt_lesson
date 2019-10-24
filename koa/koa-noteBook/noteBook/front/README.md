## 路由
1. 路由跳转 this.$router.push('/StarBanner')
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