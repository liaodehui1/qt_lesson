//单例模式
const Singleton=(function (){
    let instance=null
    //闭包
    return function(){
        if(instance){
            return instance
        }
        return instance=this //第一次new执行
    }
})()
// console.log(Singleton,typeof Singleton)
const a=new Singleton()
const b=new Singleton()
console.log(a==b)
