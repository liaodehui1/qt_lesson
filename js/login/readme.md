- 5G时代 设备的省电很重要 js 有可能被禁用
    <a href="/login">login</a>  跳转页面 功能实现
    script      addEventListener    更好的用户体验
    无障碍的互联网访问
- event.preventDefault() 阻止默认行为
- event.stopPropagation() 阻止默认冒泡
- DOM DOM树 body是树根 元素及元素的子元素 子节点 孙节点...
    .inner 默认沿着DOM树 事件冒泡触发
## 事件执行
- addEventListener第三个参数决定绑定事件的类型
    1. true 事件为捕获类型
    2. false 事件为冒泡类型
- 事件执行三阶段
    1. 捕获阶段 从外到内捕获事件对象 执行对象捕获类型事件
    2. 目标阶段 到达target 按目标元素注册事件类型的顺序执行事件
    3. 冒泡阶段 从内向外冒泡事件对象 执行对象的冒泡事件