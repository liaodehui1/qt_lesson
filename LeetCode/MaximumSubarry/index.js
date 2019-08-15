// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 404MS
//  */
// var maxSubArray = function(nums) {
//     let max=Math.max(...nums),sum
//     for(let i=0;i<nums.length;i++){
//         sum=nums[i]
//         for(let j=i+1;j<nums.length;j++){
//             sum+=nums[j]
//             if(sum>max){
//                 max=sum
//             }
//         }
//     }
//     return max
// };

//260ms
// var maxSubArray = function(nums) {
//     let max=nums[0],sum
//     for(let i=0;i<nums.length;i++){
//         sum=0
//         for(let j=i;j<nums.length;j++){
//             sum+=nums[j]
//             if(sum>max){
//                 max=sum
//             }
//         }
//     }
//     return max
// };

// //分治法
// //最大子序和要么在左边，要么在右边，要么穿过中间
// //84ms
// var maxSubArray = function(nums) {
//     let result=maxSum(nums,0,nums.length-1)
//     return result
// };
// function maxSum(nums,x,y){
//     let v,L,R,maxs
//     if(y-x===0){//只有一个数
//         return nums[x]
//     }
//     let m=x+Math.floor((y-x)/2)

//     maxs=Math.max(maxSum(nums,x,m),maxSum(nums,m+1,y))//取左右两边较大子序和

//     //从中间往左右两边走，求左右两边的最值
//     v=0,L=nums[m]
//     for(let i=m;i>=x;i--){
//         L=Math.max(L,v+=nums[i])
//     }
//     v=0,R=nums[m+1]
//     for(let j=m+1;j<=y;j++){
//         R=Math.max(R,v+=nums[j])
//     }

//     return Math.max(maxs,L+R)//左右两边子序和较大者与中间子序和比较
// }

var maxSubArray = function(nums) {
    let max=nums[0],sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if(sum>max){
            max=sum
        }
        if(sum<0){//sum已是累赘，舍弃，重新开始
            sum=0
        }
    }
    return max
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))