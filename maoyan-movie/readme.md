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