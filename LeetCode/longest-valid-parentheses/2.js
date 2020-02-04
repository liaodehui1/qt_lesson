/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  // 时间复杂度为o(n)
  let len = s.length
  if (len === 0 || len === 1) return 0;
  let stack = [-1]
  let max = 0
  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      stack.push(i)
    }else {
      stack.pop()
      if (stack.length < 1) {
        stack.push(i)
      }else {
        max = Math.max(max, i - stack[stack.length - 1])
      }
    }
  }
  return max
};

console.log(longestValidParentheses(")(((((()())()()))()(()))("))
console.log(longestValidParentheses(")()()("))