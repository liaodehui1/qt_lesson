/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let len = s.length
  if (len === 0 || len === 1) return 0;
  let stack = [] // 使用栈，空间复杂度为O(n)
  let max = 0
  for(let i = 0; i < len; i++) {
    let tmpMax = 0
    for(let j = i; j < len; j++) {
      if(s[j] === '(') {
        // 入栈
        stack.push('(')
        tmpMax++
      }else if(s[j] === ')') {
        if (stack.length < 1) {
          max = max < tmpMax ? tmpMax : max
          break
        }else {
          stack.pop()
          tmpMax++ 
        }
      }
      if (stack.length === 0) { // pop完栈才空
        max = max < tmpMax ? tmpMax : max
      }
    }
    stack = [] //清空本次栈服务
  }
  return max
};

console.log(longestValidParentheses(")(((((()())()()))()(()))("))
console.log(longestValidParentheses(")()()("))