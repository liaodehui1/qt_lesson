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
- vue实现上传文件
1. 网速、服务器超时影响传输，避免文件丢失  
hash：前端和后端hash一样，则文件未丢失，否则文件丢失需要重传
- vue上传过程
1. 选择文件处理 handleFileChange  
以防多次选择，每次选择后先重置data数据源
2. 上传文件 handleUpload  
一、切割文件生成切片 createFileChunk  
二、计算hash calculateHash  
三、请求校验是否需要上传 verifyUpload  
后台判断文件是否合成，合成了则不需要再上传，否则需要上传（完全上传或部分上传）  
四、开始上传切片 uploadChunks  
并发上传：过滤掉已上传切片 -> 构造formData数据 -> 创造请求（实时显示切片上传进度 createProgressHandle，传入requestList在暂停时可以使用），后台创建切片存放目录并将切片从暂存区移至此目录下 -> 发出合并请求（后台通过流操作合并切片成文件）