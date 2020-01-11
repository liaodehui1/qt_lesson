/**
 * 26. 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   for(let i = 0; i < nums.length; i++) {
//     let index = nums.lastIndexOf(nums[i])
//     if(index !== i) {
//       nums.splice(i + 1, index - i)
//     }
//   }
//   return nums.length
// };

// var removeDuplicates = function(nums) {
//   for(let i = 0; i < nums.length; i++) {
//     while(true) {
//       if(nums[i + 1] === nums[i]) {
//         nums.splice(i + 1, 1)
//       }else {
//         break
//       }
//     }
//   }
//   return nums.length
// };

// 你不需要考虑数组中超出新长度后面的元素
// var removeDuplicates = function(nums) {
//   let j = 1
//   for(let i = 0; i < nums.length; i++) {
//     while(j < nums.length) {
//       if(nums[j] !== nums[i]) {
//         nums[i + 1] = nums[j]
//         break
//       }
//       j++
//       if(j === nums.length) {
//         return i + 1
//       }
//     }
//   }
// };

var removeDuplicates = function(nums) {
  const size = nums.length // 优化，无需重新计算
  let pre = 0 // 慢指针
  for(let cur = 0; cur < size; cur++) { // 快指针，一直往前跑
    if(nums[cur] !== nums[pre]) { // 不相等
      pre++
      nums[pre] = nums[cur]
    }
  }  
  return pre + 1
};

console.log(removeDuplicates([1,1,2]))