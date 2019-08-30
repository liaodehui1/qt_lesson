Function.prototype=require('./call.js')

var a=5
function foo(a){
    // console.log(this===obj)
    // console.log(this.a)
    // console.log(a)
    return this.a+a
}

const obj={
    a:4
}

var res=foo._call(obj,1)
console.log(res)