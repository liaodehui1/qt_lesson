//Math.max()
const IMATH={}//namespace
/**
 * @params:number NAN not a number
 * @return:number 返回最大值
 */
IMATH.max=function(...args){
    // console.log(arguments,arguments.length)
    console.log(args)
    for(let i=0;i<args.length;i++){
        // console.log(args[i])
        if(typeof args[i]!=='number'){
            return NAN//NAN类型为number
        }
    }
}

console.log(IMATH.max(...[2,9]))