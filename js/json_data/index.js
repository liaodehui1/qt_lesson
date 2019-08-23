//1. node .\index.js开启服务器
//2. 直接访问127.0.0.1:8080
//3. 向客户端响应index.html
//4. 请求书籍信息 /book 响应
const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        // console.log('url:/')
        res.setHeader('Content-Type','text/html;charset=utf-8')
        // res.end('首页')
        let stream=fs.createReadStream('index.html')
        stream.pipe(res)
    }else if(req.url=='/book'){
        // console.log('url:/book')
        res.setHeader('Content-Type','text/json;charset=utf-8')
        const data={
            "name":"Node.js 入门示例",
            "description":"学好Node,做全栈开发",
            "date":"2019-08-23"
        }
        res.end(JSON.stringify(data))
    }
})

server.listen(8080)