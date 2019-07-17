## 图片
images:重要的图片,公司的logo
background:展示性图片
## bfc
overflow: hidden; 创建一个bfc的区域
- overflow: hidden
    1. 实现溢出隐藏
    2. 清除浮动 
        最后一个子容器浮动影响父容器高度 父容器设置overflow:hidden，此时父容器高度将包括脱离文档流的子容器高度
        如果不是最后一个子容器浮动，则应为浮动容器的:after设置clear:both
    3. 解决margin塌陷问题
        兄弟容器之间分别涉资margin-bottom和margin-top后，实际间距为两者的较大值而不是两者之和   只为其中一个设置margin
        父子容器之间,当父级容器和子容器都设置了margin-top（或者只给子容器设置,margin-top），最终的结果是子容器和父容器之间的外边距为0，父容器与页面顶部的外边距为父容器和子容器中的最大值
            a. 为父容器设置overflow: hidden;
            b. 为父容器设置padding-top，子容器不设置margin-top
- opacity和rgba的alpha
    1. opacity 不透明度 
        从 0.0 （完全透明）到 1.0（完全不透明）
        作用于整个容器
        子容器未设置opacity或值大于父容器的opacity 子容器将继承父容器
    2. alpha 透明度 
        从 0.0 （完全透明）到 1.0（完全不透明）
        作用于指定元素
- justify-content
    space-between 左右对齐，无左右边距
    space-around 左右对齐，有左右边距