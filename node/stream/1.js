//require 模块引入机制
const fs = require('fs')//文件模块
//IO
var read=fs.createReadStream('./sample.txt')//创建可读流
    // .pipe(process.stdout)//pipe构建一个管道 process输出设备的一种 交互
var str=''
read.on('data',(data)=>{
    str+=data
})
read.on('end',()=>{
    console.log(str.split(' '))
})