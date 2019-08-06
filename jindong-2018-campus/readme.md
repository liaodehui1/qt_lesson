## em
如果自己设置了font-size 相对于自己的font-size  
如果没有 相对于父级font-size  
## border-image
- border-image-source none(默认)  
    图像url/linear-gradient  
- border-image-slice 100%(默认)  
    裁剪线距上、左、下、右位置 number(默认单位px)  
- border-image-width 1(默认)  
    边框背景图的宽度  
    大于border-width则向padding扩张 小于则向外围缩小至所设置的宽度，此时border有空白  
- border-image-outset 0(默认)  
    边框背景超出边框盒的量  
    number为border-width倍数 px像素 往边框外移动
- border-image-repeat stretch(默认)  
    stretch 对分到的格子内的图像拉伸  
    repeat 像将图像从中间向两边重复铺开，不管最后两侧的图像是否完整
    round 类似repeat,通过对图像进行缩放以适应区域 保证两侧图像完整
## preserve-3d
为子元素保留3d保留3D效果
## rotate
3D: 右手螺旋定则 正值变大->往四指方向旋转角度越大   
## alternate
alternate(正着执行一遍动画后，反过来执行一次动画)  
normal 正着执行一次动画后直接回到初始状态  
