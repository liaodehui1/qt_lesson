function _call(_this,...args){
    // console.log(this)
    _this._fn=this //对象上挂在一个指向this函数的属性
    
    let res= _this._fn(...args) //指向对象内部的_fn函数

    //删除_this内部凭空出现的_fn属性 
    //直接挂载的_fn属性的configurable默认为true 可删除
    delete _this._fn 

    return res
}

Function.prototype._call=_call
module.exports=Function.prototype