// nuxt: vue ssr next: react ssr nest:node,基于express
const Koa = require('koa')
const KoaRouter = require('koa-router')
const Koaview = require('koa-views')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const jwt = require('jsonwebtoken') 
const router = new KoaRouter()
const app = new Koa()

app.use(bodyParser())
app.use(Koaview(path.join(__dirname,'./views'),{
  extension:'ejs'
}))
router.get('/',async (ctx) => {
  const userinfo = {userName:123,sex:0,hobbies:['1','2','3']}
  await ctx.render('index',{
    ...userinfo
  })
})
router.get('/login',async (ctx) => {
  await ctx.render('login')
})
router.post('/login',async (ctx) => {
  const data = ctx.request.body
  if(data.userName === '123' && data.pwd === '456'){
    // 生成token
    // 保持用户登录状态 每次请求都把uid
    // jwt 解决了 传递数据 加密的功能
    // 加密的算法 payload 签名
    const token = jwt.sign({uid:000},'secret',{
      expiresIn:60*6 //有效时间 单位秒
    })
    ctx.body = {
      code:200,
      token:token
    }

  }
})
router.get('/401', async (ctx) => {
  await ctx.render('401');
})
router.get('/userCenter',async (ctx) => {
  await ctx.render('userinfo')
})
router.get('/userInfo',async (ctx,next) => {
  // 同步验证
  const auth = ctx.request.headers['authorization'];
  const token = auth.split(' ')[1];
  try {
    //解码取出之前存在payload的user_id 和 name
    const payload = jwt.verify(token, 'secret');
    console.log('payload———', payload);
		ctx.user_id = payload.id;
		await next()
	} catch (err) {
    // 验证不通过
    ctx.body = {
      code: 300
    }
  }
  // 验证通过
  ctx.body = {
    code: 200,
    name: 123,
    id: 1
  }
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3005,() => {
  console.log('server is running on port 3005')
})