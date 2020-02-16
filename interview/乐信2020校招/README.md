1. Cache-Control 缓存机制

可缓存性：  
- public 可以被任何对象缓存（客户端，代理服务器等）
- private 代理服务器不能缓存他

重新验证或重新加载：
- immutable 表示响应正文不会随时间而改变

304状态码：服务端已经执行了GET，但文件未变化

2. cookie

持久cookie: expires(cookie删除日期)  
会话级Cookie: 浏览器关闭销毁

cookie和storage都存在跨域限制

3. 栈可以实现递归；广度优先遍历（队列），深度优先遍历（栈）

4. 负载均衡：把当前请求转发到指定IP

5. display:none 的元素不显示 不发起http请求；background-image在行内元素上不生效

6. 定位
- fixed 相对窗口
- absolute 相对于第一个非static的父元素

7. hybird app 混合模式移动应用；serverless 小程序云开发（云函数）

8. 技术选项
- 图片验证码防止非人为操作
- 防止CSRF攻击：token, google:same-site

9. substr(start, len)；substring(start, end)

10. 同源： 协议、域名、端口号

11. 面向对象三个基本特征：封装、继承、多态

12. 
- grunt、gulp：任务流工具(js打包 -> 图片压缩 -> 上线)
- webpack: 打包工具