## js set get
1. set/get 方法
```js
  get url() { // request.url 不需要request.url()
    return this.req.url
  }
```
2. 代理 ctx.url
```js
function defineGetter(prop,name){ // 参数分别是代理的对象和对象上的属性
  proto.__defineGetter__(name,function(){ // 每个对象都有一个__defineGetter__方法，
    return this[prop][name]
  })
}
defineGetter('request','url')
```
3. 原型 ctx.url()
```js
function defineprops(prop,name){
  Object.defineProperty(proto,name,{
    value:function(){
      return this[prop][name]
    }
  })
}
defineprops('request','url')
```