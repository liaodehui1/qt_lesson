// 通过内容计算hash值
self.importScripts('/spark-md5.min.js')
// self -> this 当前线程
self.onmessage = e => {
  // self.postMessage({
  //   'msg': 'hello'
  // })
  const { fileChunkList } = e.data
  const spark = new self.SparkMD5.ArrayBuffer()
  let percentage = 0
  let count = 0
  // 计算出hash
  const loadNext = index => {
    const reader = new FileReader() // 文件阅读对象
    reader.readAsArrayBuffer(fileChunkList[index].file)
    reader.onload = e => {
      count++
      spark.append(e.target.result)
      if (count === fileChunkList.length) {
        self.postMessage({
          percentage: 100,
          hash: spark.end()
        })
        self.close()
      }else {
        percentage += 100 / fileChunkList.length // 每次加一份
        self.postMessage({
          percentage
        })
        loadNext(count)
      }
    }
  }
  loadNext(0)
}