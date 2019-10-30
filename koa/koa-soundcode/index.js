// let http = require('http')

// let server = http.createServer((req,res) => {
//   res.end('hello world')
// })

// server.listen(3000,() => {
//   console.log('server is running on port 3000')
// })

// const Koa = require('koa')
// const app = new Koa()

// app.use(async (ctx,next) => {
//   ctx.body = 'hello world!'
// })

// app.listen(3000,() => {
//   console.log('server is running on port 3000')
// })

// let Koa = require('./lib/application')
// let app = new Koa()

// app.use((req,res) => {
//   res.end('hello world')
// })

// app.listen(3000,() => {
//   console.log('server is running on port 3000')
// })

let Koa = require('./lib/application')
let app = new Koa()

app.use((ctx) => {
  console.log(ctx.req.url)
  console.log(ctx.request.req.url)
  console.log(ctx.response.req.url)
  console.log(ctx.request.url)
  console.log(ctx.request.path)
  console.log(ctx.path)
  console.log(ctx.url)
  ctx.body = 'hello world!!!'
})

app.listen(3000,() => {
  console.log('server is running on port 3000')
})