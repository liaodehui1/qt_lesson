/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 160ms
 */
/**
 * stack为一个栈，存放已经确认的字符位置
 * col为board每一行的字符个数
 * headIndex为word[0]在border中的位置
 * flag用于确认当前应该查找的字符在word中的位置
 * step为stack中确认好的字符进行到第几步(上1，左2，下3，右4)
 */
var exist = function (board, word) {
    let stack = [], col = board[0].length, headIndex = -1
    board = [].concat.apply([], board)//二维数组转为一维数组
    while (headIndex<board.length) {
        headIndex = board.indexOf(word[0], headIndex+1)//从当前headIndex的下一位置查找headIndex
        if(headIndex===-1){//整个board的headIndex都测试完了
            break
        }
        stack.push(headIndex)
        let flag = 0, step = [1]//step每一个确认好的字符从第1步（上）开始确认周围是否存在下一个字符
        while (stack.length != word.length && stack.length != 0) {
            flag++
            console.log(stack,step)
            let top = stack[stack.length - 1]

            //第1步，上
            //要求当前字符不是在二维的第一行&&上方字符是要查找的下一个字符&&已经确认的字符栈中没有top-col这个位置
            if(step[step.length-1]==1){
                if (top - col >= 0 && board[top - col] === word[flag] && !stack.includes(top - col)) {
                    stack.push(top - col)
                    step[step.length - 1]++
                    step.push(1)
                    continue
                }else{//查找失败
                    step[step.length - 1]++//马上进行下一步
                    console.log('上')
                }
            }

            //第2步，左
            //要求当前字符不是在二维的最右侧&&左侧字符是要查找的下一个字符&&已经确认的字符栈中没有top+1这个位置
            if(step[step.length-1]==2){
                if ((top + 1 + 1) % col != 1 && board[top + 1] === word[flag] && !stack.includes(top + 1)) {
                    stack.push(top + 1)
                    step[step.length - 1]++
                    step.push(1)
                    continue
                }else{
                    step[step.length - 1]++
                    console.log('左')
                }
            }

            //第3步，下
            //要求当前字符不是在二维的最后一行&&下方字符是要查找的下一个字符&&已经确认的字符栈中没有top+col这个位置
            if(step[step.length-1]==3){
                if (top + col < board.length && board[top + col] === word[flag] && !stack.includes(top + col)) {
                    stack.push(top + col)
                    step[step.length - 1]++
                    step.push(1)
                    continue
                } else{
                    step[step.length - 1]++
                    console.log('下')
                }
            }

            //第1步，上
            //要求当前字符不是在二维的最右行&&右侧字符是要查找的下一个字符&&已经确认的字符栈中没有top-1这个位置
            if(step[step.length-1]==4){
                if ((top + 1 - 1) % col != 0 && board[top - 1] === word[flag] && !stack.includes(top - 1)) {
                    stack.push(top - 1)
                    step[step.length - 1]++
                    step.push(1)
                    continue
                }
            }
            console.log('右')

            //上下左右都没找到下一个要找的字符，当前字符不符合
            stack.pop()
            step.pop()
            flag -= 2
        }
        if(stack.length == word.length){
            return true
        }
    }
    return false
};

console.log(exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], 'ABCCED'))