## 跨域
浏览器的安全策略  
a.com 请求 b.com 时不允许
## cors
cross origin resource share  
跨域资源共享  
规定一些http的首部字段 允许服务器申明哪些站点有资源访问权限  
## 简单 复杂请求
[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)  
简单请求：html 原生form表单可以发出去的请求  
复杂请求：分两步 1. 预检请求，试探支不支持跨域 2.正式请求
## 代理
线上环境解决跨域：代理  
生活中的中介  
工具 live-server nginx  
1. live-server 自带代理  
live-server --proxy=/api:http://localhost:3001/api 将/api 映射为http://localhost:3001/api
2. 代码层面：fe -> /api/post[node server] -> /api/post[java server]
3. 以上都是反向代理：代理客户端 正向代理：代理服务器
## img提交数据
一个域下面的Ajax请求有并发限制  
提交数据给服务器的时候 ajax一般处理业务接口  
日志提交 考虑到ajax并发控制 属于非核心业务的采用img的方式提交  
`https://web.u51.com/api.u51.com/nodejs-performance-log-server/t.png?_u=https%3A%2F%2Fwww.u51.com%2F&_o=&_v=0.2.24&dns=0&ntw=46&dlt=926&dct=2341&tlt=2342&spt=906&kmdNetwork=&kmdOs=&kmdHasBg=false
`
Status Code:204 No Content