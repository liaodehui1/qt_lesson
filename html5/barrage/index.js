let data = [
    { value: '听妈妈的话', time: 5, color: 'red', speed: 3, fontsize: 22 },
    { value: '想快快长大，才能保护她', time: 10, color: '#00a1f5', speed: 1, fontSize: 30 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 6 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 8 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 15 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 35 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 20 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 18 },
    { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 10 }
]

//获取需要用到的DOM结构
let doc = document
let canvas = doc.getElementById('canvas')
let video = doc.getElementById('video')
let $txt = doc.getElementById('text')
let $btn = doc.getElementById('btn')
let $color = doc.getElementById('color')
let $range = doc.getElementById('range')

//创建CanvasBarrage类
class CanvasBarrage {
    //constructor是一种用于创建和初始化class创建的对象的特殊方法
    constructor(canvas, video, opts = {}) {
        //如果canvas和video都没传，那就直接return
        if (!canvas || !video) {
            return
        }
        //直接挂载到this
        this.video = video
        this.canvas = canvas
        //设置canvas的宽高和video一致
        this.canvas.width = video.width
        this.canvas.height = video.height
        //获取画布，操作画布
        this.ctx = canvas.getContext('2d')

        //设置默认参数，如果没有传，就给带上
        let defOpts = {
            color: '#e91e63',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        }
        //合并对象并将合并对象中的全都属性挂载到this实例上
        Object.assign(this, defOpts,opts)

        //添加属性来判断当前是播放还是暂停
        this.isPaused = true
        //得到所有的弹幕消息
        this.barrages = this.data.map(item => new Barrage(item, this))
        //渲染
        this.render()
    }

    //渲染canvas绘制的弹幕
    render() {
        //清除画布
        this.clear()
        //渲染弹幕
        this.renderBarrage()
        //如果没有暂停继续渲染
        if (this.isPaused === false) {
            //通过raf渲染动画，递归进行渲染
            //相当于requestAnimationFrame(()=>this.render())
            requestAnimationFrame(this.render.bind(this))
        }
    }

    clear() {
        //清除整个画布
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    renderBarrage() {
        //拿到当前视频播放的时间
        //根据当前时间和弹幕要展示的时间作比较，来判断是否展示弹幕
        let time = this.video.currentTime

        //遍历所有弹幕
        this.barrages.forEach(barrage => {
            //用一个flag来处理是否渲染，默认是false
            if (!barrage.flag && time >= barrage.time) {
                //判断当前弹幕是否有过初始化，默认为undefined，!undefined等于true
                //如果isInit还是false，那就对当前弹幕初始化
                if (!barrage.isInit) {
                    barrage.init()
                    barrage.isInit = true
                }
                //弹幕要从右到左渲染，所有x的坐标减去当前弹幕的speed
                barrage.x -= barrage.speed
                barrage.render()

                //如果当前弹幕x坐标比自身的宽度还小，就表示渲染结束
                if (barrage.x < -barrage.width) {
                    barrage.flag = true
                }
            }
        })
    }

    add(obj) {
        //实际上就是往barrage数组里面添加一个Barrage的实例
        this.barrages.push(new Barrage(obj, this))
    }

    //重新渲染
    replay(){
        console.log('seeked')
        let time = this.video.currentTime

        this.barrages.forEach(barrage=>{
            //只对还未开始的弹幕渲染
            if(barrage.time>=time){
                barrage.flag=false//能渲染
                barrage.isInit=false//能初始化
            }
        })

        //渲染
        this.render()
    }
}

class Barrage {
    constructor(obj, ctx) {
        this.value = obj.value//弹幕内容
        this.time = obj.time//弹幕时间
        //把obj和ctx都挂载到this上，方便获取
        this.obj = obj
        this.context = ctx
    }

    //初始化弹幕
    init() {
        //如果没有涉及到下面四种参数，那就直接使用默认
        this.color = this.obj.color || this.context.color
        this.speed = this.obj.speed || this.context.speed
        this.opacity = this.obj.opacity || this.context.opacity
        this.fontSize = this.obj.fontSize || this.context.fontSize

        //为了计算弹幕的宽度，我们必须创建一个p标签，然后计算文字的宽度
        let p = document.createElement('p')
        p.style.fontSize = this.fontSize + 'px'
        p.innerHTML = this.value
        document.body.appendChild(p)

        //设置弹幕的宽度
        this.width = p.clientWidth
        //得到弹幕的宽度后，就把p标签从body中删除
        document.body.removeChild(p)

        //设置弹幕出现的位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height * Math.random()

        if (this.y < this.fontSize) {
            this.y = this.fontSize
        }
        // } else if (this.y > this.context.canvas.height - this.fontSize) {
        //     this.y = this.context.canvas.height - this.fontSize
        // }
    }

    //渲染每一个弹幕
    render() {
        //弹幕在画布上的字体
        this.context.ctx.font = `${this.fontSize}px Arial`
        //弹幕字体的填充色
        this.context.ctx.fillStyle = this.color
        //画布上填充弹幕文本
        this.context.ctx.fillText(this.value, this.x, this.y)
    }
}

//创建一个CanvasBarrage实例
//opts={data}
let canvasBarrage = new CanvasBarrage(canvas, video, { data })

//设置video的play事件来调用CanvasBarrage实例的render方法
video.addEventListener('play', () => {
    canvasBarrage.isPaused = false
    canvasBarrage.render()//触发弹幕
})
//暂停
video.addEventListener('pause', () => {
    canvasBarrage.isPaused = true
})
//在跳跃操作完成时触发(拖到进度条或重新开始)
video.addEventListener('seeked', () => {
    canvasBarrage.replay()
})


//发送弹幕的方法
function send() {
    let value = $txt.value
    let time = video.currentTime
    let color = $color.value
    let fontSize = $range.value
    let obj = { value, time, color, fontSize }

    canvasBarrage.add(obj)
    $txt.value = ''//清空输入框
}

$btn.addEventListener('click', send)