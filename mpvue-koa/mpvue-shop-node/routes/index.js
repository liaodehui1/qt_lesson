const Router = require('koa-router')
const router = new Router({
  prefix: '/lm'
})
const controllers = require('../controllers/index')

router.get("/index/index", controllers.home.index)

module.exports = router