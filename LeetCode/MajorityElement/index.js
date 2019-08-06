// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 2832ms
//  */
// var majorityElement = function(nums) {
//     let count=nums.length%2==0?nums.length/2+1:Math.ceil(nums.length/2)
//     let num
//     let array=nums.filter(function(value,index,arr){
//         return arr.indexOf(value)===index
//     })
//     nums=nums.sort((a,b) => a==b?0:(a>b)?1:-1 )
//     array.forEach(item=>{
//         let length=nums.lastIndexOf(item)-nums.indexOf(item)+1
//         if(length>=count){
//             num=item
//         }
//     })
//     return num
// }

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 2004ms
//  */
// var majorityElement = function(nums) {
//     let count=nums.length%2==0?nums.length/2+1:Math.ceil(nums.length/2)
//     let num
//     let array=nums.filter(function(value,index,arr){
//         return arr.indexOf(value)===index
//     })
//     nums=nums.sort((a,b) => a==b?0:(a>b)?1:-1 )
//     for(let i=0;i<array.length;i++){
//         let start=nums.indexOf(array[i])
//         let end=nums.lastIndexOf(array[i])
//         let length=end-start+1
//         if(length>=count){
//             num=array[i]
//             break
//         }else{
//             nums.splice(start,length)
//         }
//     }
//     return num
// }

//众数超过一半，中间项肯定为众数
// var majorityElement = function(nums) {
//     nums=nums.sort((a,b) => a==b?0:(a>b)?1:-1)
//     return nums[Math.ceil(nums.length/2)]
// }

//抵消 相同加1 不同减1
//o(n)
var majorityElement = function(nums) {
    let count=1
    let maj=nums[0]
    for(let i=1;i<nums.length;i++){
        if(maj===nums[i]){
            count++
        }else{
            count--
            if(count===0){
                maj=nums[i+1]//0-i部分抵消完
            }
        }
    }
    return maj
}
console.log(majorityElement([2,2,1,1,2,2]))