const Koa = require('./MyKoa')
const app = new Koa()

app.use(async (ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})

app.use(async (ctx, next) => {
  console.log(3)
})

app.run()