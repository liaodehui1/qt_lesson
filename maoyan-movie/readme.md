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