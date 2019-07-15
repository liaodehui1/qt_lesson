- canvas 用于绘图 Game,高互动的h5应用
- 绘图API 在context上 API很，请以现实
    中画画的方案去理解 canvas.getContext('2d')
- BOM DOM
    window=doucment+浏览器赋予的功能 定位+设备 
    摇晃+存储功能+音视屏(h5).....
- canvas
    1. canvas.getContext 所有的绘图操作都需要通过这个对象完成
        2d:canvas.getContext('2d');
        3d:canvas.getContext("webgl");
    2. strokeStyle 绘制颜色
    3. lineWidth 绘制线条宽度
    4. lineJoin miter两条线条交汇时默认尖角 round圆形边角 bevel斜角
    5. lineCap butt默认向线条的每个末端添加平直的边缘 round圆形线帽 square正方形线帽