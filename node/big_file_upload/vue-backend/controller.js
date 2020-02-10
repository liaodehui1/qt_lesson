const path = require('path')
const fse = require('fs-extra')

const UPLOAD_DIR = path.resolve(__dirname, '..', 'target')

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
    console.log(ext)
    const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`)
    console.log(filePath)
    // 判断目录是否存在
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
}