// /**
//  * @param {number[][]} M
//  * @return {number}
//  * 迭代
//  */
// var findCircleNum = function(M) {
//     let enterCicle=new Array(M.length).fill(false)
//     let count=0
//     for(let i=0;i<M.length;i++){
//         if(!enterCicle[i]){
//             enterCicle[i]=true
//             searchPartners(M,enterCicle,i)
//             count++
//         }
//     }
//     return count
// };
// function searchPartners(M,enterCicle,i){
//     for(let j=0;j<M.length;j++){
//         if(M[i][j]===1&&!enterCicle[j]){
//             enterCicle[j]=true
//             searchPartners(M,enterCicle,j)
//         }
//     }
// }

//并查集
//M[i][j] === 1表示i和j为朋友
//若i和j的根元素相同则是在同一个圈，否则更改i的根元素为j的根元素，
//而以i为根元素的所有子元素不变，它们的根元素已经不是自身了，没关系
var findCircleNum = function (M) {
    let parent = new Array(M.length).fill(0).map(function (item, index) {
        return index
    })
    // console.log(parent)
    for (let i = 0; i < M.length; i++) {
        for (let j = i + 1; j < M.length; j++) {//只看一半(右上角)
            if (M[i][j] === 1) {
                changeRoot(parent, i, j)
            }
        }
    }
    let count = 0
    for (let k = 0; k < M.length; k++) {
        console.log(parent[k])
        if (parent[k] === k) {//等于自身的不是圈内老大就是孤儿
            count++
        }
    }
    return count
}

function changeRoot(parent, a, b) {
    let a_root=findRoot(parent,a)
    let b_root=findRoot(parent,b)
    if(a_root!=b_root){
        parent[a_root]=b_root
    }
}
function findRoot(parent,x){
    while(parent[x]!=x){
        x=parent[x]
    }
    return x
}
console.log(findCircleNum([
    [1,0,0,1],
    [0,1,1,0],
    [0,1,1,1],
    [0,0,1,1]]))

    // [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0], 
    // [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
    // [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0], 
    // [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], 
    // [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], 
    // [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
    // [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0], 
    // [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], 
    // [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1], 
    // [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
    // [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0], 
    // [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], 
    // [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], 
    // [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0], 
    // [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]