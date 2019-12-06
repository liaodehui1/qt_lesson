const mynew = (constructor,...args) => {
  // 1. 创建一个新对象
  let obj = {}
  // 2. 继承原型
  obj.__proto__ = constructor.prototype
  // 3. 挂载属性
  let ret = constructor.apply(obj,args)
  // 4. 返回
  return typeof ret === 'object' ? ret : obj
}