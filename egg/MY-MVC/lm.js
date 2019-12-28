const koa = require('koa')
const { initRouter } = require('./lm-loader')

class Lm {
  constructor(conf) {
    this.$app = new koa(conf)
    this.$router = initRouter()
    this.$app.use(this.$router.routes())
  }
  start(port) {
    this.$app.listen(port, () => {
      console.log('server is running on port ' + port)
    })
  }
}

module.exports = Lm