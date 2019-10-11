// 循环移位 要求空间复杂度为o(1)
let arr = [1,2,3,4,5,6,7]
let k = 5

// 空间复杂度o(n)
// function CShift(arr,k){
//   const copy = [...arr]
//   const n = copy.length
//   k = k >= 0 ? k%n : Math.abs(k%n)
//   if(k === 0) return copy;
//   for(let i =0;i < n; i++){
//     copy[(i + k)%n] = arr[i] // 逆时针
//     // copy[i] = arr[(i + k)%n] //顺时针
//   }
//   return copy;
// }

// 空间复杂度 常数
// function CShift(arr,k){
//   const n = arr.length
//   k = k >= 0 ? k%n : Math.abs(k%n)
//   if(k === 0) return arr;
//   // 逆时针
//   while (k--) {
//     let t = arr[n-1] //不增加空间复杂度
//     for(let i = n-1;i > 0; i--){
//       arr[i] = arr[i-1]
//     }
//     arr[0] = t
//   }
//   return arr
// }

// function CShift(arr,k){
//   const n = arr.length
//   k = k >= 0 ? k%n : Math.abs(k%n)
//   if(k === 0) return arr;
//   // [ 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7 ]
//   return arr.concat([...arr]).slice(n - k,n * 2 - k)
// }

function CShift(arr,k){
  const n = arr.length
  k = k >= 0 ? k%n : Math.abs(k%n)
  if(k === 0) return arr;
  reverse(arr,0,n-1)
  reverse(arr,k,n-1)
  return arr
}
function reverse(arr,start,end){
  let t = null
  while (start < end) {
    t = arr[start]
    arr[start] = arr[end]
    arr[end] = t
    start++
    end--
  }
}
console.log(CShift(arr,k))