- user-select:none 元素和子元素的文本将无法被选中
- tansform 对元素进行旋转、缩放、移动或倾斜
    1. translate(x,y) 平移 元素居中translate(-50%,-50%)
    2. scale(x,y) 缩放
    3. rotate(angle) 2d旋转 rotate3d(x,y,z,angle) 3d旋转
        val正 顺时针
    4. skew(x-angle,y-angle) 倾斜
    5. perspective(n)
- transform-style preserve-3d 子元素保留3D转换
- tansform-origin 旋转元素的基点位置
- background-size length|percentage|cover|contain
    1. cover 图片完全覆盖容器 图片变形，被裁剪 
    2. contain 容器包含图片 图片完全显示 容器可能有白边
- rgba red green blue alpha(透明度 0-1)
- js自动执行函数
    (function(形参){})(实参)
    (function(形参){}(实参))
- 字符串拼接
    1. ES5 使用+拼接 ' + val + '
    2. ES6 使用`和${}
        