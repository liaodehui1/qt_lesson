- 先写html结构
    正确且完整的结构
    良好的类名
- 用section 代替div 完成区块语义化
- stylus 嵌套
    tab 缩进解决的是效率
    嵌套 css规则按区块来嵌套在一起，作用域，css类名的补全
    伪类，伪元素，&引用上级的选择器
    便于修改和重构
- BEM block element modifier
    规范：.[命名空间]-[组件名/块]__[元素名/元素]_[修饰符]
    1. 以双下划线 __ 来作为 块和元素 的间隔，以单下划线 _ 来作为 块和修饰器 或 元素和修饰器 的间隔，以中划线 - 来作为 块|元素|修饰器 名称中多个单词的间隔
    2. 保证各个部分只有一级 B__E_M  
    3. 元素 一个块中元素的类名必须用父级块的名称作为前缀
- a标签
    状态
    1. link 未被访问前的样式表属性
    2. visited 链接地址已被访问过时的样式表属性
    3. hover 鼠标悬停时的样式表属性
    4. active 鼠标点击与释放之间发生的事件时的样式表属性
    顺序：a:link、a:visited、a:hover、a:active
- border-collapse
    collapse:将表格和单元格的边框折叠(边框之间无间隔)
    separate:默认，分隔表格和单元格的边框(边框之间有间隔)
    inherit:从父元素继承该属性
- line-height
    line-height 与 font-size 的计算值之差分为两半，分别加到一个文本行内容的顶部和底部
    值为number或百分比类型时，以font-size为参考

    

