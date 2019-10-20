const KoaRouter = require('koa-router')
const router = new KoaRouter()
const registerController = require('../controller/register')
const loginController = require('../controller/login')

router.prefix('/api/v1')
router.post('/login',loginController)
router.post('/register',registerController)

module.exports = router

