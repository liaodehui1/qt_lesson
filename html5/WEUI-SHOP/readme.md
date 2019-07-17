- 改变this指向
    1. call(obj,param1,param2...)
    2. apply(obj,[param1,param2...])
    3. bind(obj,param1,param2...)
    4. 区别：call和apply在函数执行时指定this值，bind在一开始便更改了this指向并且会生成一个新函数