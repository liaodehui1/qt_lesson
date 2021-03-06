const http = require('http')
const server = http.createServer()
const Controller = require('./controller.js')
const controller = new Controller()

server.on('request', async (req, res) => {
  // 解决跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')

  // Provisional headers are shown
  // 跨域预检时
  if (req.method === 'OPTIONS') {
    res.status = 200
    res.end()
    return;
  }
  
  if (req.url === '/verify') {
    await controller.handleVerifyUpload(req, res)
  }
  if (req.url === '/') {
    // 处理上传切片
    await controller.handleFormData(req, res)
  }
  if (req.url === '/merge') {
    await controller.handleMerge(req, res)
  }
})

server.listen(3000, () => console.log('server is running on port 3000'))