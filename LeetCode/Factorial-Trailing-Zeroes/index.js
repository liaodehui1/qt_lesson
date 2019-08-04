/**
 * @param {number} n
 * @return {number}
 * 解法:主要是看1-n内有多少个5的倍数,25(2个5)的倍数...
 */
var trailingZeroes = function(n) {
    var result=0
    for(let i=5;Math.floor(n/i)!=0;i*=5){
        result+=Math.floor(n/i)
    }
    return result
};

console.log(trailingZeroes(100))