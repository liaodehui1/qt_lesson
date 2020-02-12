<template>
  <div id="app">
    <div>
      <input type="file" @change="handleFileChange">
      <el-button @click="handleUpload">上传</el-button>
      <el-button @click="handlePause">暂停</el-button>
      <el-button @click="handleResume">恢复</el-button>
    </div>
    <div>
      <div>计算文件hash</div>
      <el-progress :percentage="hashPercentage"></el-progress>
    </div>
    <div>总进度</div>
    <el-progress :percentage="fileUploadPercentage"></el-progress>
    <!-- 多个切片 -->
    <el-table :data="data">
      <el-table-column 
        prop="hash"
        label="切片hash"
        align="center">
      </el-table-column>
      <el-table-column
        label="大小(kb)"
        align="center"
        width="120">
        <!-- 解构 -->
        <template v-slot="{ row }">
          {{row.size | transformByte}}
        </template>
      </el-table-column>
      <el-table-column
        label="进度"
        align="center">
        <template v-slot="{ row }">
          <el-progress :percentage="row.percentage" color="#909399"></el-progress>
        </template>
      </el-table-column>
    </el-table>
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
  filters: {
    // 过滤 格式化
    transformByte (val) {
      return Number((val / 1024).toFixed(0))
    }
  },
  computed: {
    uploadPercentage () {
      if (!this.container.file || !this.data.length) return 0;
      const loaded = this.data
        .map(item => item.size * item.percentage)
        .reduce(( pre, cur ) => pre + cur)
      return parseInt((loaded / this.container.file.size).toFixed(2))
    }
  },
  watch: {
    uploadPercentage (now) {
      if (now > this.fileUploadPercentage) {
        // console.log(now)
        this.fileUploadPercentage = now
      }
    }
  },
  data: () => ({
    container: { // 将我们的任务放到一起
      file: null,
      hash: '' // 哈希
    },
    status: Status.wait,
    hashPercentage: 0,
    data: [], // 上传数据
    requestList: [], // 请求列表
    fileUploadPercentage: 0
  }),
  methods: {
    handleFileChange (e) {
      // console.log(e.target.files)
      // 分割文件
      const [ file ] = e.target.files
      // console.log(file)

      this.resetData()
      // 重置data结构为初始状态
      Object.assign(this.$data, this.$options.data())
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
      // 上传过
      if (!shouldUpload) {
        this.$message.success('已经上传')
        this.status = Status.wait
        return;
      }
      this.data = fileChunkList.map(({ file }, index) => ({
        fileHash: this.container.hash,
        index,
        hash: this.container.hash + '-' + index,
        chunk: file,
        size: file.size,
        percentage: 0
      }))
      await this.uploadChunks(uploadedList) // 上传切片
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
    async uploadChunks (uploadedList = []) {
      const requestList = this.data
        .filter((item) => {
          if (uploadedList.includes(item.hash)) {
            item.percentage = 100
          }else {
            return true
          }
        })
        .map(({ chunk, hash, index }) => {
        const formData = new FormData()
        formData.append('chunk', chunk)
        formData.append('hash', hash)
        formData.append('filename', this.container.file.name)
        formData.append('fileHash', this.container.hash)
        return { formData, index }
      }).map(async ({ formData, index }) => 
        this.request({
          url: 'http://localhost:3000',
          data: formData,
          onProgress: this.createProgressHandle(this.data[index]),
          requestList: this.requestList
        })
      )
      await Promise.all(requestList)
      console.log('可以发送合并请求了')
      // 之前上传的切片数量（暂停了） + 本次上传的切片数量 = 所有切片数量时
      if (uploadedList.length + requestList.length === this.data.length) {
        await this.mergeRequest()
      }
    },
    // 上传进度
    createProgressHandle (item) {
      return e => {
        item.percentage = parseInt(String(e.loaded / e.total * 100))
      }
    },
    handlePause () {
      this.status = Status.pause // 状态暂停
      this.resetData()
    },
    resetData () {
      this.requestList.forEach(xhr => xhr ? xhr.abort() : null)
      this.requestList = []
      if (this.container.worker) { // 正在进行hash计算
        this.container.worker.onmessage = null
      }
    },
    async handleResume () {
      this.status = Status.uploading
      const { uploadedList } = await this.verifyUpload(
        this.container.file.name,
        this.container.hash
      )
      await this.uploadChunks(uploadedList)
    },
    async mergeRequest () {
      await this.request({
        url: 'http://localhost:3000/merge',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          size: SIZE,
          fileHash: this.container.hash,
          filename: this.container.file.name
        })
      })
      this.$message.success('上传成功')
      this.status = Status.wait
    },
    request ({
      url,
      method = 'POST',
      data,
      onProgress = e => e,
      headers = {},
      requestList
    }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        // 上传进度
        xhr.upload.onprogress = onProgress
        Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]))
        xhr.send(data)
        xhr.onload = e => {
          if (requestList) {
            // xhr使命完成 切除已完成切片上传请求
            const xhrIndex = requestList.findIndex(item => item == xhr)
            requestList.splice(xhrIndex, 1)
          }
          resolve({
            data: e.target.response
          })
        }
        if (requestList) {
          requestList.push(xhr)
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
