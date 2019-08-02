/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    if(J==null||J.trim().length==0||S==null||S.trim().length==0){
        return 0
    }
    let count=0
    for(let i=0;i<J.length;i++){
        for(let j=0;j<S.length;j++){
            if(J.charAt(i)===S.charAt(j))
                count++
        }
    }
    return count
};

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// var numJewelsInStones = function(J, S) {
//     if(J==null||J.trim().length==0||S==null||S.trim().length==0){
//         return 0
//     }
//     let arr=new Array(58)//122-65
//     let count=0
//     for(let i=0;i<J.length;i++){
//         arr[J.charCodeAt(i)-65]=1
//     }
//     // for(let ch of J.split('')){
//     //     arr[ch.charCodeAt(0)-65]=1
//     // }
//     for(let j=0;j<S.length;j++){
//         if(arr[S.charCodeAt(j)-65]==1){
//             count++
//         }
//     }
//     return count
// };

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// var numJewelsInStones = function(J, S) {
//     if(J==null||J.trim().length==0||S==null||S.trim().length==0){
//         return 0
//     }
//     let count=0
//     S.split('').forEach(item=>J.includes(item)?count++:count)
//     return count
// };
console.log(numJewelsInStones("aA","aAAbbbb"))