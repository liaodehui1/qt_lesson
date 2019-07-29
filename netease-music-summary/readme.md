## position
- static positoin未设值 默认
- absolute相对于父级第一个非static定位的元素
- position 脱离文档流
    动画就是css属性的改变
    当一个css属性改变了 浏览器将其绘制在页面上 同时也会影响其他元素
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
- steps[n,[start|end]]
    1. n 每两帧之间分多少步，不是整个动画分为多少帧
    2. start 动画结束点为结束前一步开始点状态，会闪烁   end 结束前一步结束点状态
    3. 用途：钟表阶式转动(菊花图)，脚印行走效果，雪碧图实现跑动效果
## animation-direction
- reserve 动画反向播放
## animation-fill-mode
- forwards 动画结束后元素的样式为最后一帧的元素样式
- backwards 动画设置了延时，延时期间的元素样式为动画第一帧的样式