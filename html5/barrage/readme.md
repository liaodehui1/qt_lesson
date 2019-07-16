- Object.assign()
    第一个参数是目标对象，后面的参数都是源对象
    后面对象的属性会覆盖前面对象的同名属性
- 数组迭代方法
    方法的两个参数：function和运行该函数的作用域对象
    function的三个参数：数组当前项(必要)，该项在数组中的位置，数组对象本身
    5个迭代方法：
    1. map() 返回每次函数调用的结果组成的数组
    2. forEach() 对数组的每项运行给定的函数
    3. filter() 过滤每项，返回符合的项组成的函数
    4. every() 返回Boolean值，传入每项都返回true时，返回true
    5. some() 回Boolean值，传入项有一项返回true时，返回true
- js中的=>
    item => new Barrage(item, this) 相当于
    function(item){return new Barrage(item,this)}
- requestAnimationFrame 重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧
    requestAnimationFrame(callback)
- bind 将函数绑定到某个对象
    bind()会创建一个函数 f.bind(obj)相当于obj.f()
- this
    1. 普通函数 this指的是window或undefined
        requestAnimationFrame(this.render()) 错误
    2. 对象.方法 this指向调用方法的对象
        constructor中的this.render()
    3. 箭头函数 this是指向词法作用域 按照定义时的作用域从当前作用域往外查找
        requestAnimationFrame(()=>this.render())
    4. bind 函数体内的this对象的值会被绑定到传入bind()中的第一个参数的值
        requestAnimationFrame(this.render.bind(this))
- clientWidth = width+左右padding
    offsetWidth = width + 左右padding + 左右boder
    scrollWidth：获取指定标签内容层的真实宽度（可视区域宽度+被隐藏区域宽度）
- ctx画布
    画布左上角为原点
    fillText中的x和y是文本左下角相对于画布的坐标