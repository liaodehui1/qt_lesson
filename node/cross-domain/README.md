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