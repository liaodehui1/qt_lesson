const path = require('path')
const fse = require('fs-extra') // fs扩展包

// 合并文件块
const UPLOAD_DIR = path.resolve(__dirname, '.', 'target')
// console.log(UPLOAD_DIR)
// const filename = 'fz'
// const filePath = path.resolve(UPLOAD_DIR, '..', `${filename}.jpg`)

const pipeStream = (path, writeStream) => 
  new Promise(resolve => {
    // 读取 fz-1 fz-2 ...
    const readStream = fse.createReadStream(path)
    readStream.on('end', () => {
      fse.unlinkSync(path)
      resolve()
    })
    // 写入 fz.jpg
    readStream.pipe(writeStream)
  })

const mergeFileChunk = async (filePath, filename, size = 0.5 * 1024 * 1024) => {
  // console.log(filePath, filename, size)
  // 大文件上传时，先以文件为目录名，把blob放入这个目录
  // 文件上传前要加上index
  const chunkDir = path.resolve(UPLOAD_DIR, filename.split('.')[0])
  // console.log(chunkDir)
  const chunkPaths = await fse.readdir(chunkDir)
  chunkPaths.sort((a, b) => a.split('-')[1] - b.split('-')[1])
  // console.log(chunkPaths)
  // 每块内容写入最后文件
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
  console.log('文件合并成功')
  fse.rmdirSync(chunkDir)
}

// mergeFileChunk(filePath, filename, 0.5 * 1024 * 1024)
module.exports = mergeFileChunk
