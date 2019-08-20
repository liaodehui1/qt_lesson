/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 * 80ms
 * 正方形有两条相等的对角线和四条相等的边
 */
var validSquare = function(p1, p2, p3, p4) {
    let l1=getDis(p1,p2),l2=getDis(p1,p3),l3=getDis(p2,p3)
    // console.log(l1,l2,l3)
    if(!(l1&&l2&&l3)){//有两点重合
        return false
    }
    if(l1===l3){//p2为转折点
        if(getDis(p2,p4)===l2&&getDis(p1,p4)===l1&&getDis(p3,p4)===l1){
            return true
        }
    }else if(l1===l2){//p1为转折点
        if(getDis(p1,p4)===l3&&getDis(p2,p4)===l1&&getDis(p3,p4)===l1){
                return true
        }
    }else if(l2===l3){//p3为转折点
        if(getDis(p3,p4)===l1&&getDis(p1,p4)===l2&&getDis(p2,p4)===l2){
                return true
        }
    }else{
        return false
    }
    return false
};

//88ms
// var validSquare = function(p1, p2, p3, p4) {
//     let l1=getDis(p1,p2),
//         l2=getDis(p1,p3),
//         l3=getDis(p2,p3),
//         l4=getDis(p1,p4),
//         l5=getDis(p3,p4),
//         l6=getDis(p2,p4)
//     let set=new Set([l1,l2,l3,l4,l5,l6])
//     // console.log(set)
//     if(set.size===2&&!set.has(0)){
//         return true
//     }else{
//         return false
//     }
// }
function getDis(p1,p2){
    return Math.sqrt((p1[0]-p2[0])*(p1[0]-p2[0])+(p1[1]-p2[1])*(p1[1]-p2[1]))
}
console.log(validSquare(
    [0,0],
[1,1],
[1,0],
[0,1]))