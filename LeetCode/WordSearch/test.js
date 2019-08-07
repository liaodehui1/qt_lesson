var arr1 = [[0, 1], [2, 3], [4, 5]];
//...arr1 => [0,1],[2,3],[4,5]
// console.log(...arr1) //[0,1] [2,3] [4,5]

function flatten(arr) {
    return [].concat(...arr.map(x =>
        {
            // console.log(x)
            return Array.isArray(x) ? flatten(x) : x
    })) 
}
var arr2 = flatten(arr1);


Math.max.apply(null, [14, 3, 77])
console.log(Math.max(...[14, 3, 77]))

const a1=[1,2]
// const a2=[...a1]
//此种赋值，扩展运算只能在最后
//解构赋值的拷贝是浅拷贝
const [...a2]=a1
console.log(a2)

const b1=[1,2],b2=[3,4]
const b3=[...b1,...b2]
console.log(b3)

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
   ]);
//map.keys() 返回Map Iterator
console.log(...map.keys())   

//Generator 函数
const go = function*(){
    yield 1;
    yield 2;
    yield 3;
   };
//go 它看上去就像一个可以记住执行状态的函数
console.log(...go())

// console.log.apply(null,arr1)//apply(null,arr1)返回[ 0, 1 ] [ 2, 3 ] [ 4, 5 ]

const c1=[[1,[2,3]],[4,5]]
//c1.toString()返回1,2,3,4,5
//join把每个元素转化为字符串再用指定字符串连接 c1.join('.')返回1,2,3.4,5
console.log()