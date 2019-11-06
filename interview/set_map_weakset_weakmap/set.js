// set 比 == 严谨 没有 === 严谨
let s1 = new Set([NaN,NaN,NaN])
console.log(s1)
let s2 = new Set([5,'5'])
console.log(s2)

let s3 = new Set([1,2,3])
console.log(s3.size)

let s4 = new Set()
s4.add(1).add(2).add(3)
s4.delete(1)
console.log(s4)
console.log(s4.has(1))

// set遍历的顺序和插入顺序一致
// keys() 包含集合内所有的键的迭代器
// values() 包含集合内所有的值的迭代器
// entries() 包含set对象内所有键值的迭代器
// forEach(callback,thisArg)

let s5 = new Set([1,2,3])
console.log(s5.keys())
console.log(s5.values())
console.log(s5.entries())
for(let entry of s5.entries()){
  console.log(entry)
}
s5.forEach((key,value) => {
  console.log(key,value)
})


