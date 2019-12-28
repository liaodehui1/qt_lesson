const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
// 读取目录和文件
function load (dir, cb) {
  // 获取文件绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取目录
  const files = fs.readdirSync(url)
  // 遍历
  files.forEach((fileName) => {
    // 去掉后缀
    fileName = fileName.replace('.js','')
    const file = require(url + '/' + fileName)
    cb(fileName, file)
  })
}

// load('routes', (fileName, file) => {
//   console.log(fileName)
//   console.log(file)
// })


// 加载路由
function initRouter () {
  const router = new Router()
  load('routes',(fileName, routes) => {
    const prefix = fileName === 'index' ? '' : `/${fileName}`
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')

      // 注册路由
      router[method](prefix + path, routes[key])
    })
  })
  return router
}

module.exports = {
  initRouter
}