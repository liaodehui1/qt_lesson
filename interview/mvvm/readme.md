# MVVM
+ mvvm分层 理解更深入
+ JS 传统开发 写点事件，DOM，AJAX
## defineProperty
Object.defineProperty(obj,prop,desc)
+ obj 需要定义属性的对象
+ prop 定义的属性
+ desc 属性描述符
### 作用
Object.defineProperty()直接在一个已有对象上定义一个新属性，或者修改一个已经存在的属性  
### 属性
1. value 属性值 默认undefined
2. get 提供getter方法
3. set 提供setter方法
4. writable 属性是否可修改 默认false
5. enumerable 是否能在for..in循环遍历或在Object.keys()中列举出
6. configurable 描述符是否可改变 属性是否可删除 默认false
+ 属性分为数据属性和访问器属性
    - 描述符共有键值
        enumerable和configurable  
    - 数据属性描述符特有键值  
        value和writable  
    - 访问器属性描述符特有键值  
        get和set  