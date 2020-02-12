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

const pipeStream = (path, writeStream) => 
  new Promise(resolve => {
    const readStream = fse.createReadStream(path)
    readStream.on('end', () => {
      fse.unlinkSync(path)
      resolve()
    })
    readStream.pipe(writeStream)
  })

const mergeFileChunk = async (filePath, fileHash, size) => {
  const chunkDir = path.resolve(UPLOAD_DIR, fileHash)
  const chunkPaths = await fse.readdir(chunkDir)
  chunkPaths.sort((a, b) => a.split('-')[1] - b.split('-')[1])
  await Promise.all(
    chunkPaths.map((chunkPath, index) => 
      pipeStream(
        path.resolve(chunkDir, chunkPath),
        fse.createWriteStream(filePath, {
          start: index * size,
          end: (index + 1) * size 
        })
      )
    )
  )
  fse.rmdirSync(chunkDir)
}

const createUploadedList = async (fileHash) => {
  const chunkDir = path.resolve(UPLOAD_DIR, `${fileHash}`)
  let chunkPaths = []
  if (fse.existsSync(chunkDir)) {
    chunkPaths = await fse.readdir(chunkDir)
  }
  return chunkPaths
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
        uploadedList: await createUploadedList(fileHash)
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
  async handleMerge (req, res) {
    const data = await resolvePost(req)
    const { fileHash, filename, size } = data
    const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${extractExt(filename)}`)
    await mergeFileChunk(filePath, fileHash, size)
    res.end('文件合并成功')
  }
}