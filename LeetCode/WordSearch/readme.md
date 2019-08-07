## js二维数组变一维
+ reduce+concat
    实现：arr1.reduce(function (a, b) { return a.concat(b)});  
    - reduce  
        array.reduce(callback,initValue)
        callback:function(total,curValue,curIndex,arr)  
        initValue:初始值  
    - concat  
        objArray.concat(arrX,arrX...)  
        不会改变现有的数组(objArray),返回一个数组副本
+ 迭代+concat+...(扩展运算)+map+isArray
    function flatten(arr){return [].concat(...arr.map(x => Array.isArray(x) ? flatten(x) : x))}  
    可以将多维数组转为一维数组  
    - ...(扩展运算)
        将一个数组转为用逗号分隔的参数序列  
        它将替代apply  
        它可以复制数组  
        它可以合并数组
        任何拥有Iterator接口的对象，都可以用扩展运算符转为真正的数组  
    - map  
        返回对每项进行运算后的新数组  
    - isArray
        判断一个对象是否为数组  
+ concat+apply  
    arr2 = [].concat.apply([], arr1);  
+ toString/join+split
    arr2 = arr.toString().split(',');/arr2 = arr.join().split(',');  
    将多维数组转化为一维字符串数组  
