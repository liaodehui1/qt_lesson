const Event=require('events')
const ev=new Event()

//订阅 按照监听器注册的顺序同步地调用所有监听器
function price1(){
    console.log('大米涨价了')
}
ev.on('price',price1)
ev.on('price',function(thing){
    console.log(thing+'涨价了')
})
//发布者 触发所有监听事件
ev.emit('price','大蒜')
ev.removeListener('price',price1)
ev.emit('price')

//once 仅处理事件一次
ev.once('eat',()=>{
    console.log('eat1')
})
ev.once('eat',()=>{
    console.log('eat2')
})
ev.emit('eat')
// ev.emit('eat')
