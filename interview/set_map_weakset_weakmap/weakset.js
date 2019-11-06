// weakSet 对象允许你将弱引用对象存储在集合中 —— 弱引用版本的Set
var test = {
  name: 'test',
  content:{
    name:'wn',
    age:'18'
  }
}

let ws = new WeakSet()
// let a = {foo:'bar'}
ws.add(test.content)
console.log(ws.length)
ws.delete(test.content)
console.log(ws)