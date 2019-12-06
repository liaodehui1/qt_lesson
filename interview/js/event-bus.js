/**
 * 发布订阅
 */

// 事件容器
class EventEmitter {
  constructor() {
    this._events = this._events || new Map() //存储事件
    this._maxListeners = this._maxListeners || 10 //监听上限
  }
}

// 发布器
EventEmitter.prototype.emit = function(type, ...args) {
  let handle
  // 从存储事件键值对的this._events中获取对应事件回调函数
  handle = this._events.get(type)
  // 触发名为type的事件
  if(Array.isArray(handle)) {
    for(let i = 0; i < handle.length; i++) {
      if(args.length > 0) {
        handle[i].apply(this,args)
      }else {
        handle[i].apply(this)
      }
    }
  }
}

// 监听器
EventEmitter.prototype.on = function(type, cb) {
  if(!this._events.has(type)) {
    this._events.set(type,[cb])
  }else {
    this._events.get(type).push(cb)
  }
  // if(this._events.size < this._maxListeners) {
  //   this._events.set(type,cb)
  // }
}

let eventEmitter = new EventEmitter()
eventEmitter.on('price', function(){
  console.log('价格1')
})
eventEmitter.on('price', function(){
  console.log('价格2')
})
console.log(eventEmitter)
eventEmitter.emit('price')
