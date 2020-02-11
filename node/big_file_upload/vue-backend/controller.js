const path = require('path')
const fse = require('fs-extra')
const multiparty = require('multiparty')

const UPLOAD_DIR = path.resolve(__dirname, '.', 'target')

const extractExt = filename => 
  filename.slice(filename.lastIndexOf('.'), filename.length)

const resolvePost = req => {
  return new Promise(resolve => {
    let chunk = ''
    req.on('data', data => {
      chunk += data // 二进制
    })
    req.on('end', () => {
      // console.log('end', chunk)
      resolve(JSON.parse(chunk))
    })
  })
}

module.exports = class {
  async handleVerifyUpload (req, res) {
    // 服务器端有没有此文件
    // 拿到的post的data bodyParser
    const data = await resolvePost(req)
    const { filename, fileHash } = data
    const ext = extractExt(filename)
    // console.log(ext)
    const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`)
    // console.log(filePath)
    // 判断文件是否存在
    if (fse.existsSync(filePath)) {
      res.end(JSON.stringify({
        shouldUpload: false
      }))
    }else {
      res.end(JSON.stringify({
        shouldUpload: true,
        uploadedList: []
      }))
    }
  }
  async handleFormData (req, res) {
    const multipart = new multiparty.Form()
    multipart.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err)
        res.status = 500
        res.end('progress file chunk failed')
        return;
      }

      const [chunk] = files.chunk
      const [hash] = fields.hash
      const [filename] = fields.filename
      const [fileHash] = fields.fileHash
      // console.log(fields, files)
      // 最终文件地址
      const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${extractExt(filename)}`)
      // 切片所在地址
      const chunkDir = path.resolve(UPLOAD_DIR, fileHash)
      if (fse.existsSync(filePath)) {
        res.end('file exist')
        return;
      }
      if (!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir)
      }
      await fse.move(chunk.path, path.resolve(chunkDir, hash))
      res.end('recived file chunk')
    })
  }
}