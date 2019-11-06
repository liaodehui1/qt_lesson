// 地址区分key
let m1 = new Map()
m1.set(['a'],'a')
m1.set(['a'],'b')
console.log(m1)

let m2 = new Map()
m2.set('a','a')
m2.set('a','b')
console.log(m2)

// let it = m2.keys()
// console.log('a' === it.next().value)

var test = {
  name: 'test',
  content:{
    name:'wn',
    age:'18'
  }
}

let wm = new Map()
// let a = {foo:'bar'}
wm.set(test.content,'a')
console.log(wm.has(test.content))
delete test.content
console.log(test)
console.log(wm.has(test.content))