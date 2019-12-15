const express = require('express')
const app = express()
import render from './render'

// 前端打包完成的静态资源
app.use(express.static('public'))

app.get('*',(req,res) => {
  const html = render(req)
  // console.log(html)
  res.send(html)
})

app.listen(3000,() => {
  console.log('server is running on port 3000')
})