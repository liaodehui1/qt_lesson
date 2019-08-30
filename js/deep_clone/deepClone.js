function deepClone(obj){
    var _obj
    switch(obj.constructor){
        case Object:
            _obj={}
            for(let key in obj){
                if(obj[key].constructor===Object||
                    obj[key].constructor===Array||
                    obj[key].constructor===Map||
                    obj[key].constructor===Set){
                    _obj[key]=deepClone(obj[key])
                }else{
                    _obj[key]=obj[key]
                }
            }
            break
        case Array:
            _obj=[]
            for(let item of obj){
                if(item.constructor===Object||
                    item.constructor===Array||
                    item.constructor===Map||
                    item.constructor===Set){
                    _obj.push(deepClone(item))
                }else{
                    _obj.push(item)
                }
            }
            break
        case Map:
            _obj=new Map()
            for(let [key,value] of obj){
                if(value.constructor===Object||
                    value.constructor===Array||
                    value.constructor===Map||
                    value.constructor===Set){
                    _obj.set(key,deepClone(value))
                }else{
                    _obj.set(key,value)
                }
            }
            break
        case Set:
            _obj=new Set()
            for(let value of obj.values()){
                if(value.constructor===Object||
                    value.constructor===Array||
                    value.constructor===Map||
                    value.constructor===Set){
                    _obj.add(value)
                }else{
                    _obj.add(value)
                }
            }
    }
    return _obj
}

Object.defineProperty(Object.prototype,'deepClone',{
    value:deepClone,
    Enumerable:false//不可被遍历
})
module.exports=Object.prototype