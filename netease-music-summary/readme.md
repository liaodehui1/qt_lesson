## position
- static positoin未设值 默认
- absolute相对于父级第一个非static定位的元素
## linear-gradient
- 渐变角度,to bottom
- 0deg 从下往上 deg顺时针
## 适配
- transform scale(0.75) transform scale(0.5) transform scale(0.3)
## transform-origin
- 改变元素对象的原点位置
- 旋转rotate()、缩放scale()、倾斜skew()和位移translate()都是参照元素原点
## background-size
- percentage
    1. 以父元素的百分比来设置背景图像的宽度和高度
    2. 只设置一个值，则第二个值会被设置为 "auto"
    3. 图片比例失调，变形严重
- cover
    1. 背景图按比例放大或缩小至填满容器
    2. 图片比例保持不变
- contain
    1. 背景图按比例放大或缩小至图片宽度等于容器宽度或高度相等
    2. 图片比例保持不变
## transition-timing-function过渡速度曲线
- ease-in-out 慢速开始和结束
- linear 匀速 