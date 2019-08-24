//len为函数参数个数
function curry(fn,len=fn.length){
    return _curry.call(this,fn,len)
}
function _curry(fn,len,...args){
    // console.log(args)
    return function(...params){
        // console.log(params)
        //递归
        //如果没到数量，返回函数
        //到了执行代码
        let _args=[...args,...params]
        if(_args.length<len){
            return _curry.call(this,fn,len,..._args)
        }else{
            return fn.apply(this,_args)
        }
    }
}

exports.curry=curry