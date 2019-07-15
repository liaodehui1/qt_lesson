const fs=require('fs');
// I/O 找文件 读入内存 控制台输出callback
// 异步 callback 匿名函数
fs.readFile('./index.html','utf-8',(error,data)=>{
    // if(error){
    //     console.log(error)
    // }else{
    //     console.log(data);
    // }
    if(!error){
        console.log(data)
    }
})