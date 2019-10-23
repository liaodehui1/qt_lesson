## koa
### 路由
1. 安装 cnpm i koa-router -S
2. 引入 创建router new KoaRouter()
3. 使用 router.get router.post
4. 挂载 app.use(router.routes()).use(router.allowedMethods())
5. 跨域 koa-mvc
### post参数解析
1. 安装 cnpm i koa-bodyparser/koa-body -S
2. 挂载 app.use(bodyParser()) / app.use(koaBody())
3. 使用 ctx.request.body
### 页面渲染
1. 安装 cnpm i koa-views -S
2. 挂载，指定views目录
```js
app.use(Koaview(path.join(__dirname,'./views'),{
  extension:'ejs' // 模板
}))
```
3. 使用 ctx.render('view名称'，{渲染参数})
### JWT token
1. 安装 cnpm i jsonwebtoken -S
2. 使用 koa-jwt-view
+ 登录请求创建token
+ 客户端保存token到localStorage
+ 客户端再次请求时，拦截请求带上token
+ 服务端从请求头部拿出token，拿出数据做检验