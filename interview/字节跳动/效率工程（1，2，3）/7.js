// 给定一个无重复的data数组，选出n个数，使其之和为sum
// 回溯法 递归

// function getAllCombine(data, n, sum, temp = []) {
//   if (!data.length) return;
//   let len = data.length
//   for(let i = 0; i < len; i++) {
//     temp.push(data[i])
//     if (temp.length < n) {
//       getAllCombine(data.slice(i + 1), n, sum, temp)
//     }
//     if (temp.length === n) {
//       let res = temp.reduce((pre, cur) => pre + cur)
//       if (res === sum) {
//         console.log(temp)
//       }
//     }
//     temp.pop()
//   }
// }

// 第一个符合的
function getAllCombine(data, n, sum, temp = []) {
  if (temp.length === n) {
    if (temp.reduce((a, b) => a + b) === sum) {
      return true
    }else {
      return false
    }
  }
  for (let i = 0; i < data.length; i++) {
    let current = data.shift() // data数组会减少
    temp.push(current)
    let res = getAllCombine(data, n, sum, temp)
    if (res) {
      return temp
    }
    temp.pop()
    // data尾部添加上抛掉的current，保持data.length
    data.push(current)
  }
}

// getAllCombine([1,2,3,4,5,6], 3, 15)
console.log(getAllCombine([1,2,3,4,5,6, 7], 3, 15))