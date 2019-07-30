- 参数 js比较松散 arguments
    event 在第一位 事件注册和处理函数的分离
    event.target event.target.tagName
    this指向事件发生的元素 但是箭头函数丢弃this 指向它的上一级
- ajax fecth 让我们主动发起请求,动态网页
- filter/find/map
    1. filter 筛选数组中符合条件的所有元素，并且放在一个新数组中 没有符合条件的元素则返回空数组
    2. find 查找符合条件的第一个元素,返回该元素(非数组) 没有返回undefined
    3. map 对数组中的元素调用函数进行处理，并且把处理结果放在一个新数组中返回 没有返回为undefined的数组
- dataset
    1. 存放自定义data-*属性 生成DOM对象时属性去掉前缀data-,去掉-采用驼峰式 dataset存放的属性值为字符串
    2. 比getAttribute性能较差