<template>
  <div id="app">
    <div>
      <input type="file" @change="handleFileChange">
      <el-button @click="handleUpload">上传</el-button>
    </div>
    <div>
      <div>计算文件hash</div>
      <el-progress :percentage="hashPercentage"></el-progress>
    </div>
  </div>
</template>

<script>
const Status = {
  wait: 'waiting',
  pause: 'pause',
  uploading: 'uploading'
}
const SIZE = 0.5 * 1024 * 1024

export default {
  name: 'App',
  data: () => ({
    container: { // 将我们的任务放到一起
      file: null,
      hash: '' // 哈希
    },
    status: Status.wait,
    hashPercentage: 0
  }),
  methods: {
    handleFileChange (e) {
      // console.log(e.target.files)
      // 分割文件
      const [ file ] = e.target.files
      // console.log(file)
      this.container.file = file
    },
    async handleUpload (e) {
      // 大量的任务
      if (!this.container.file) return;
      this.status = Status.uploading
      const fileChunkList = this.createFileChunk(this.container.file)
      // console.log(fileChunkList)
      this.container.hash = await this.calculateHash(fileChunkList)
      // 文件 hash 没有必要上传同一个文件
      const { shouldUpload, uploadedList } = await this.verifyUpload( // 上传，验证
        this.container.file.name,
        this.container.hash
      )
    },
    createFileChunk (file, size = SIZE) {
      const fileChunkList = []
      let cur = 0
      while(cur < file.size) {
        fileChunkList.push({
          file: file.slice(cur, cur + size)
        })
        cur += size
      }
      return fileChunkList
    },
    async calculateHash (fileChunkList) {
      return new Promise(resolve => {
        // 封装花时间的任务
        // web workers 单独开一个线程做某工作，做完回调
        this.container.worker = new Worker('/hash.js')
        this.container.worker.postMessage({ fileChunkList })
        this.container.worker.onmessage = e => {
          // console.log(e.data)
          const { hash } = e.data
          this.hashPercentage = e.data.percentage
          if (hash) {
            resolve(hash)
          }
        }
      })
    },
    async verifyUpload (filename, fileHash) {
      const { data } = await this.request({
        url: 'http://localhost:3000/verify',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({ // 字符化
          filename,
          fileHash
        })
      })
      return JSON.parse(data)
    },
    request ({
      url,
      method = 'POST',
      data,
      headers = {},
      requestList
    }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]))
        xhr.send(data)
        xhr.onload = e => {
          resolve({
            data: e.target.response
          })
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
