const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const path = require('path')

const app = new Koa()

// 静态资源访问
app.use(KoaStatic(path.join(__dirname,'./static')));
// 预检请求处理中间件
app.use(async (ctx,next)=>{
  // 允许cookies时 必须是具体域 且是域名非127.0.0.1
  ctx.set('Access-Control-Allow-Origin','http://localhost:8080') // origin 请求源 可为*
  ctx.set('Access-Control-Allow-Headers','X-custom,Content-Type')
  ctx.set('Access-Control-Allow-Methods','POST,GET,PUT,DELETE,OPTIONS')
  // 是否允许发送cookies
  ctx.set('Access-Control-Allow-Credentials',true)
  await next()
})

// router配置
var router = new KoaRouter();
router.post('/api/books', (ctx, next) => {
  // ctx.router available
  console.log(ctx.cookies.get('hello'))
  ctx.body = [
    {bookName:'php 入门到精通'},
    {bookName:'node 入门到精通'},
  ]
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001,()=>{
  console.log('server is running on port 3001')
})