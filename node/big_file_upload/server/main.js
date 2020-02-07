const http = require('http')
const path = require('path')
const querystring = require('querystring')
const fse = require('fs-extra')
const multiparty = require('multiparty')
const mergeFileChunk = require('./index')
const server = http.createServer()
const UPLOAD_DIR = path.resolve(__dirname, '.', 'target')

server.on('request', async (req, res) => {
  // 解决跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  // res.end('hello')
  const URL = req.url.split('?')[0]
  if (URL === '/') {
    const multipart = new multiparty.Form()
    // console.log(multipart)
    multipart.parse(req, async (err, fileds, files) => {
      if (err) return;

      // console.log(fileds)
      // console.log(files)
      const [chunk] = files.chunk // 拿到了文件块
      const [filename] = fileds.filename // 文件名
      const dir_name = filename.split('-')[0]
      const chunkDir = path.resolve(UPLOAD_DIR, dir_name) // /target/fz
      // console.log(chunkDir)
      if (!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir)
      }
      // console.log(chunk.path)
      await fse.move(chunk.path, `${chunkDir}/${filename}`)
      res.end('ok')
    })
  } else if (URL === '/merge') {
    const query = querystring.parse(req.url.split('?')[1])
    // console.log(query.filename)
    const filename = query.filename
    const filePath = path.resolve(UPLOAD_DIR, '..', `${filename}`)
    // console.log(filePath)
    await fse.ensureFile(filePath, (err) => {
      if (err) return;
    })
    await mergeFileChunk(filePath, filename)
    res.end('ok')
  }
})

server.listen(3000, () => console.log('server is running on port 3000'))