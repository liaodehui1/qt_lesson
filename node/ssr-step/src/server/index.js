const express = require('express')
const app = express()


app.get('/',(req,res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="app">456</div>
  </body>
  </html>
  `)
})

app.listen(3000,() => {
  console.log('server is running on port 3000')
})