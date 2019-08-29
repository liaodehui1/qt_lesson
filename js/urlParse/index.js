const url=require('./url.js')

const url1='https://juejin.im/search?query=js&type=all'
const url2='https://juejin.im/search?query=js&type'
const url3='https://juejin.im/search?query=js&query=css&type=all'
const url4='https://juejin.im/search?query=%E5%9B%BE%E7%89%87%E5%BC%82%E6%AD%A5%E4%B8%8A%E4%BC%A0&type=all'

console.log(url.parse(url1))
console.log(url.parse(url2))
console.log(url.parse(url3))
console.log(url.parse(url4))