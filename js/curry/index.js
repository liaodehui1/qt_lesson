const curry=require('./common.js').curry
// console.log(curry)

//验证手机号、邮箱
// function checkByRegExp(reg,string){
//     return reg.test(string)
// }
// console.log(checkByRegExp(/1[3-9]\d{9}/,"13565658594"))
// //.com.cn
// console.log(checkByRegExp(/^(\w+)+(\.\w+)*@(\w)+((\.\w+)+)$/,"12a.as.s@as.sd.cn"))
let _checkByRegExp=curry(function(reg,string){
    console.log(reg.test(string))
})
_checkByRegExp(/1[3-9]\d{9}/)("13565658594")
_checkByRegExp(/^(\w+)+(\.\w+)*@(\w)+((\.\w+)+)$/)("12a.as.s@as.sd.cn")

//加法
// function sum(a,b,c){
//     return a+b+c
// }
// function Sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(Sum(1)(2)(3))

let _sum=curry(function(a,b,c){
    console.log(a+b+c)
})
_sum(1)(2)(3)

//curry封装 输出
// function curry(fn,len=fn.length){
//     return _curry.call(this,fn,len)
// }
// function _curry(fn,len,...args){
//     // console.log(args)
//     return function(...params){
//         // console.log(params)
//         //递归
//         //如果没到数量，返回函数
//         //到了执行代码
//         let _args=[...args,...params]
//         if(_args.length>=len){
//             return fn.apply(this,_args)
//         }else{
//             return _curry.call(this,fn,len,..._args)
//         }
//     }
// }
let _fn=curry(function(a,b,c,d,e){
    console.log(a,b,c,d,e)
})

// _fn(1)
_fn(1)(2)(3)(4)(5)
