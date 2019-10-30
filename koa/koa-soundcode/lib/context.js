let proto = {}

function defineGetter(prop,name){ // 参数分别是代理的对象和对象上的属性
  proto.__defineGetter__(name,function(){ // 每个对象都有一个__defineGetter__方法，
    return this[prop][name]
  })
}
defineGetter('request','url')
defineGetter('request','path')

// function defineprops(prop,name){
//   Object.defineProperty(proto,name,{
//     value:function(){
//       return this[prop][name]
//     }
// })
// }
// defineprops('request','url')
// defineprops('request','path')

module.exports = proto