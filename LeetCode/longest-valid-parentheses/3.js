/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  // 空间复杂度为O(1)
  let len = s.length
  if (len === 0 || len === 1) return 0;
  let left = right = 0
  let max = 0
  for(let i = 0; i < len; i++) {
    if(s[i] === '(') {
      left++
    }else {
      right++
    }
    if (left === right) {
      max = Math.max(max, 2 * right)
    }else if (left < right) {
      left = right = 0 //重新开始
    }
  }
  left = right = 0
  for(let i = len - 1; i >= 0; i--) {
    if(s[i] === '(') {
      left++
    }else {
      right++
    }
    if (left === right) {
      max = Math.max(max, 2 * left)
    }else if (left > right) {
      left = right = 0 //重新开始
    }
  }
  return max
};

console.log(longestValidParentheses("((())(())"))
console.log(longestValidParentheses(")(((((()())()()))()(()))("))
console.log(longestValidParentheses(")()()("))