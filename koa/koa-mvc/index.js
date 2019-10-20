const Koa = require('koa')
const router = require('./router/index')
const koaBody = require('koa-body')
const app = new Koa()

app.use(koaBody())

// 预检请求处理中间件
app.use(async (ctx,next)=>{
  // 允许cookies时 必须是具体域 且是域名非127.0.0.1
  ctx.set('Access-Control-Allow-Origin','http://127.0.0.1:8080') // origin 请求源 可为*
  ctx.set('Access-Control-Allow-Headers','X-custom,Content-Type')
  ctx.set('Access-Control-Allow-Methods','POST,GET,PUT,DELETE,OPTIONS')
  // 是否允许发送cookies
  ctx.set('Access-Control-Allow-Credentials',true)
  ctx.body = '123456'
  await next()
})

// 路由挂载
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,()=>{
  console.log('server is running on port 3000')
})