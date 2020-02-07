const Router = require('koa-router')
const router = new Router({
  prefix: '/lm'
})
const controllers = require('../controllers/index')

// 首页相关的接口
router.get("/index/index", controllers.home.index)
// 搜索相关的接口
router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction)
router.get('/search/indexaction', controllers.search.index.indexAction)
router.post('/search/clearhistoryaction', controllers.search.index.clearHistoryAction) 
router.get('/search/helperaction', controllers.search.index.helperAction)

module.exports = router