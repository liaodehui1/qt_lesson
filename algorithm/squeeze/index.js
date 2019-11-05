/**
 * 数组降维
 */
let gArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
// function outputArr(gArr,oArr){
//   for(let i = 0;i < gArr.length; i++){
//     if(Array.isArray(gArr[i])){
//       outputArr(gArr[i],oArr)
//     }else{
//       oArr.push(gArr[i])
//     }
//   }
// }
// let oArr = []
// outputArr(gArr,oArr)
// console.log(oArr)

function outputArr(arr){
  let res = []
  for(let i = 0;i < arr.length; i++){
    if(Array.isArray(arr[i])){
      res = res.concat(outputArr(arr[i]))
    }else{
      res.push(arr[i])
    }
  }
  return res
}
// function outputArr(arr){
//   return arr.reduce((pre,item) => {
//     return pre.concat(Array.isArray(item) ? outputArr(item) : item)
//   },[])
// }
console.log(outputArr(gArr))
console.log(gArr.toString().split(',').map(item => parseInt(item)))