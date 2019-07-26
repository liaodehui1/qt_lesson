- 网页显示大量的HTML也是负担
    http请求 3000 伺服状态 server
    / index.html 传输给浏览器Client
    127.0.0.1 localhost 本地开发
    192.168.43.207 局域网 远程 ip:8080 下载下来(1.5s say bay)
    浏览器 访问代理Client
    远程 服务器 (IP,domain) 伺服状态(http)
    live-server 8080 
- 分页 ?limit=20&page=1
    html5 来实现
- http 超文本传输协议
    文件太大 分几次，等时间长 对大数据分页
- http 状态码
    1. 304 文件没有修改，使用浏览器缓存
- 得益于es6 Array.from({length:n},(v,k)=>`新闻${k}`) 前端模拟大数据
- 按页分割 分割好，Array.from({length:Math.ceil(arr.length/size)},(v,k)=>Array.from({length:size}))


# IntersectionObserver
##概念
- 监视某个元素是否滚动进了浏览器窗口的可视区域
##作用
- 懒加载(图片)、预加载(无限滚动)
##构造函数 
- IntersectionObserver(callback, options)
    1. callback function(entries,observer)
##实例
- 实例属性(options)
    1. root 观察者 默认null window
    2. rootMargin 被观察者离观察者的距离 到达时触发callback
    3. threshold 被观察者进入观察者面积与自身全面积比例 默认0(相交面积为0) 值为0-1，可多项 被观察者面积为0时，设置为0或1 从0到1或从1到0会触发callback
- 实例方法
    1. observe(目标元素) 添加被观察者
    2. unobserve(目标元素) 取消
    3. disconnect() 取消全部被观察者
##IntersectionObserverEntry 
- 属性
    1. target 发生相交的目标元素
    2. boundingClientRect 发生相交的目标元素的矩形信息
    3. intersectionRect 相交区域的矩形信息
    4. intersectionRatio intersectionRect的面积除以boundingClientRect的面积 0-1