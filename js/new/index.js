function Foo(age){
    this.name='wn'
    this.age=age
}

function objectFactory(){
    let obj={} //1. 定义一个对象
    const Constructor=[].shift.call(arguments) //2. 获取构造函数
    obj.__proto__=Constructor.prototype //3. 设置对象私有属性[[prototype]]的值 原型连接
    let rst=Constructor.apply(obj,arguments) //4. 执行构造函数
    return typeof rst==='object' ? rst : obj //5. 如果构造函数返回了对象则直接返回结果 否则返回obj
}

console.log(objectFactory(Foo,18))