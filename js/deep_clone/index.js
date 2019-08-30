Object.prototype=require('./deepClone')

var obj1={a:{a:1,b:[{a:1},[1,2]],c:function(){}}}

var obj2=Object.deepClone(obj1)

// console.log(obj2)

var kvArray = [["key1", "value1"], ["key2", "value2"]];
var obj3=new Map(kvArray)
var obj4=Object.deepClone(obj3)
// console.log(obj3,obj4)

var obj5=new Set([1,2,3,4])
var obj6=Object.deepClone(obj5)
console.log(obj5,obj6)