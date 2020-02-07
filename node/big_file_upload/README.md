# 大文件上传与断点续传
- 前端的切片
1. file.slice 类似数组slice blob类型文件切片 n个切片并发上传速度更快
2. blob协议 在文件上传前实现预览
- 服务器端
1. 如何将切片合并成图片  
stream流 可读流 可写流  
chunk 都是一个二进制文件  
Promise.all 来包装每个chunk的写入  
每个chunk写入 先创建可读流 再pipe给可写流
2. 思路： 以原文件作为文件夹的名字，在上传blobs到这个文件夹，并且每个blob都以文件-index的命名方式来存储
- 结果
1. 将图片切割成大小为500k的切片
2. 通过formData表单数据并发提交到后台 /
3. 后台使用multiparty解析表单数据
4. 切片chunk保存于临时目录下，通过move方法移到新建的指定chunk目录下 /target/fz
5. Promise.all结束，前台再发起合并请求 /merge
6. 后台通过stream流操作读取chunk文件合并成图片