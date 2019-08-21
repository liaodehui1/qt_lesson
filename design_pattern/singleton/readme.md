## 单例模式
- 永远只返回一个对象
- 立即执行函数+闭包
- instance 全局? 
    ```JS
    var instance=null;//污染命名空间
    function Singleton(){
        if(instance){
            return instance
        }
        return instance=this 
    }
    ```
- 立即执行函数 在返回函数 是构成闭包常用手段