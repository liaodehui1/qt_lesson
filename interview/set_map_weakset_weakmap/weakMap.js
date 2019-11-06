// 一个只能以对象作为key的map
var test = {
  name: 'test',
  content:{
    name:'wn',
    age:'18'
  }
}

let wm = new WeakMap()
// let a = {foo:'bar'}
wm.set(test.content,'a')
console.log(wm.has(test.content))
delete test.content
console.log(wm.has(test.content))