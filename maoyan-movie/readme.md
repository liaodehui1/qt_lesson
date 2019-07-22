- z-index
    需要和定位元素(position:relative/absolute/fixed/sticky)配合使用
- filter
    1. blur(px) 高斯模糊 像素融合 越大越模糊 不能为百分比
    2. brightness(%) 超过100%会更亮
    3. grayscale(%) 像转换为灰度图像 100%为完全转为灰度图像
    4. opacity(%) 0%(完全透明)
- BFC Block fomatting context 
    1. BFC的生成：根元素，float的值不为none，overflow的值不为visible，display的值为inline-block、table-cell、table-caption，position的值为absolute或fixed
    2. BFC约束规则：两个盒子间距为外边距之和而不是取较大值，BFC的区域不会与float的元素区域重叠,BFC的高度包括浮动子元素高度BFC就是页面上的一个隔离的独立容器
    3. BFC的作用：清除内部浮动，垂直margin合并，创建自适应两栏布局
- 居中
    1. 水平居中 行内元素text-align:center 块级元素 margin:0 auto
    2. 垂直居中 行高相等 上下padding相等 display:table-cell+vertical-align:middle; 
    3. 水平垂直居中 绝对定位 flex布局 grid布局(网格布局)
- vertical-align
    1. 默认为baseline(与父容器基线对齐，图片/输入框)
    2. text-top 与文本顶端对齐
    3. middle(中部对齐，图片)，图片实际上不居中 距离上部>距离下部，需要在父元素加上font-size:0使其居中
- jquery中加入类
    1. prepend/prepeTo
    2. append/appendTo
    3. 区别：append是插入元素内部的后面，而prepend是插入元素内部的最前面
- 原生js判断是否存在某个类
    1. 变量.classList.contains('类名')
    2. 变量.getAttribute('class').indexOf('类名') > -1
- .类名1.类名2
    样式属于类名2
    类名1与类名2同级
- for in/of
    推荐 for...in遍历对象 for...of遍历数组
    1. for...in遍历遍历数组时会遍历自定义属性且顺序不一定
    2. for...of遍历数组时，item为数组每一项的值；遍历对象会报错
    3. for...in遍历时，item为对象的key，为数组的index
    4. for...in为RS5特性，for...of为ES6特性
    5. for...in遍历对象 
        for(let item in obj){console.log(obj[key])//console.log(eval('obj.'+item))} 
        obj.item错误，没有item属性 
        eval计算表达式，会取出item值 
    6. for...in遍历数组
        for(let index in arr){console.log(arr[index])}
    7. for...of遍历数组
        for(let item of arr){console.log(item)}
    8. for...of遍历对象
        for(let key of Object.keys(obj)){console.log(obj[key])}
        Object.keys(obj)返回obj对象中的属性组成的数组
- white-space
    1. 默认normal 空白忽略
    2. nowrap 文本不换行
    3. pre 空白保留 空白符(换行符、空格、tab)
- !important
    提升属性优先级至最高 放在属性值结束的;前