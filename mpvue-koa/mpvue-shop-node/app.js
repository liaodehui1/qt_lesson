const Koa = require('koa')
const config = require('./config')
const router = require('./routes/index')
const koaBodyparser = require('koa-bodyparser')

const app = new Koa()

app.use(koaBodyparser())
app.use(router.routes())

app.listen(config.port, () => {
  console.log(`server is running on port ${config.port}`)
})