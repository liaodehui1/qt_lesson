- callback
    addEventListener(event_type,callback);
    定义时，不执行，注册了
    事件发生时，将注册的回调函数拿回来调用一下 异步
    回调，就是回头调用的意思。函数a的事先干完，回头再调用函数b
- fs Node.js内置 文件模块 负责文件读写
    异步是需要花时间，注册行为，callback
    error 错误信息
    异步：
        文本文件读取 fs.readFile('sample.txt', 'utf-8', function (err, data){/*code*/})
        二进制文件读取 fs.readFile('sample.png', function (err, data){/*code*/})
    同步：var data = fs.readFileSync('sample.txt', 'utf-8');
- 操作系统
    addEventListener 事件监听 
    I/O操作 典型的慢操作 Input/Out 
    cpu(运算和指令集) 内存，外部存储设备
    fs.readFile(path,'uft-8',callback)

- const var let 
    1. const  声明一个只读的常量,声明时必须进行初始化
        使用 const 定义的对象或者数组，其实是可变的
        但是我们不能对常量对象重新赋值
    2. var
        代码块{}无法限制var声明的变量 {}外可以访问{}内的var变量
        for循环中var声明的i会影响全局变量i
        var声明的变量可以再次用var声明同名变量
        var关键字定义的变量可以在使用后声明(变量提升)
    3. let 
        代码块{}中let声明的变量只在{}内有效
        for循环中let声明的i只在循环体内有用，不影响循环体外的i
        let声明的变量之后不可以再次用let声明同名的变量
        let声明变量，变量需要先声明再使用
- phaser HTML5游戏框架
    创建游戏：页面内容(div容器)+插件+自己编写的js
    newGame(width, height, renderer(游戏的引擎), parent(游戏的容器id), state(游戏的各种状态), transparent(背景是否透明), antialias(是否消除锯齿),physicsConfig(物理引擎设置))
    1. renderer Phaser.CANVAS为使用html5画布，Phaser.WEBGL为使用性能更加好的WebGL来渲染，Phaser.AUTO为自动侦测
    2. state 所有状态(init，preload，loadUpdate，loadRender，create，update，preRender，render，resize，paused，resumed，pauseUpdate，shutdown)，每个状态会调用不同的方法
    spritesheet(key(名称), url, frameWidth, frameHeight, frameMax(最大帧数), margin, spacing)
    sprite对象有个animations属性，代表的是Phaser中专门管理动画的对象：AnimationManager，该对象有一个add方法，用来添加动画，还有一个play方法，用来播放动画
        add(name, frames, frameRate, loop, useNumericIndex)
        play(name, frameRate(每秒帧数), loop(是否循环), killOnComplete)