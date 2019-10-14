const Koa = require('koa')
const KoaBody = require('koa-body')
const Path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const app = new Koa()

// 函数
app.use(KoaBody({
  multipart: true,
  formidable: {
    maxFieldsSize: 200 * 1024 * 1024,
    keepExtensions: true,
    uploadDir: Path.join(__dirname, '/static/images')
  }
}))

app.use(async (ctx, next) => {
  // path 路径
  // url 带参
  console.log(ctx.path, ctx.url, ctx.method)
  const path = ctx.path
  const method = ctx.method

  if (method === 'GET' && path === '/') {
    ctx.body = `
    <form action="/upload" 
      method="post" 
      enctype="multipart/form-data">
    <input type="file" name="avatar"/>
      <input type="submit" value="提交" />
    </form>
    `
  } else if (method === 'POST' && path === '/upload') {
    // console.log(ctx.request.files)
    
    // promise封装
    const readdir = promisify(fs.readdir)
    const files = await readdir('./static/images/', 'utf-8')
    const htmlTemplate = files.map(file => {
      return `
      <li>
        <a href="/images/${files}">${file}</a>
      </li>
      `
    }).join('')
    ctx.body = htmlTemplate
  }
})

app.listen(3000, () => {
  console.log('album server is running 3000')
})