// 不能操作DOM
let sum = 0;
for(let i = 0; i < 1000000; i++) {
  sum += i
}
this.postMessage(sum)