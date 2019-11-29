# instagram
+ 前后端分离  
  前端 react antd; 后端 /api/v2  
  用户模块开发 /login/register post  
+ egg.js  
  app 整个应用  
  context controller  
  controller目录下所有文件 自动转化为中间件

+ router, 创建了controller  
  post 发送表单，跨站访问 有安全问题  
  egg.js 配置项  
  ```js
    // 跨站访问攻击
  config.security = {
    csrf:{enable: false}
  }
  ```
