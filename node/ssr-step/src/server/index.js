const express = require('express')
const app = express()
import render from './render'

app.get('/',(req,res) => {
  const html = render()
  // console.log(html)
  res.send(html)
})

app.listen(3000,() => {
  console.log('server is running on port 3000')
})