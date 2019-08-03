/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var index1,index2,i,j,anotherNum
        length=numbers.length,
        nums=numbers.slice()//浅复制,只有当元素是简单数据类型,nums改变不会影响numbers
    do{
        i=0
        anotherNum=target-nums[i]
        j=numbers.lastIndexOf(anotherNum)//从后往前找,返回下标
        if(j!==-1){//没找到返回-1
            break
        }else{
            nums=nums.filter(num=>num!==nums[i]&&num!==anotherNum)//过滤,返回新数组
        }
    }while(i<length)
    index1=numbers.indexOf(nums[i])
    index2=numbers.lastIndexOf(anotherNum)//因为index2>index1,所以index2应从后往前找
    return [++index1,++index2]
};

// /**
//  * 通用解法 双指针
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(numbers, target) {
//     var index1=0,index2=numbers.length-1
//     while(index1<index2){
//         if(numbers[index1]+numbers[index2]===target){
//             return [++index1,++index2]
//         }else if(numbers[index1]+numbers[index2]<target){
//             ++index1
//         }else{
//             --index2
//         }
//     }
// }
console.log(twoSum([0,0,3,4],0))