/**
 * @param {number[][]} grid
 * @return {number}
 * 100ms
 */
var minPathSum = function(grid) {
    if(grid.length===1){
        return grid[0].reduce((a,b)=>a+b)
    }
    if(grid[0].length===1){
        let dis=0
        for(let i=0;i<grid.length;i++){
            dis+=grid[i][0]
        }
        return dis
    }
    let dis=new Array(grid.length*grid[0].length)
    // console.log(dis)
    let steps=grid.length-1+grid[0].length-1,colNum=grid[0].length,length=dis.length
    dis[0]=grid[0][0]
    for(let i=1;i<=steps;i++){
        let j=(i>=colNum)?(i-colNum+1):0
        for(;j<=i;j++){
            let index=i+colNum*j-j
            if(index>=length){
                break
            }
            // console.log(`第${i}步：${index}`)
            let row=Math.floor(index/colNum)
            let col=index%colNum
            // console.log(`第${i}步：[${row},${col}]`)
            if(row===0){
                dis[index]=dis[index-1]+grid[row][col]
                // console.log(dis[index])
            }else if(col===0){
                dis[index]=dis[index-colNum]+grid[row][col]
            }else{
                dis[index]=dis[index-1]<dis[index-colNum]?
                    dis[index-1]+grid[row][col]:dis[index-colNum]+grid[row][col]
            }
        }
        // console.log(`第${i}步：${dis}`)
    }
    // console.log(dis[dis.length-1])
    return dis[dis.length-1]
};

// var minPathSum = function (grid) {
//     let rowNum = grid.length, colNum = grid[0].length
//     //第一行
//     for (let i = 1; i < colNum; i++) {
//         grid[0][i] += grid[0][i - 1]
//     }
//     //第一列
//     for (let i = 1; i < rowNum; i++) {
//         grid[i][0] += grid[i - 1][0]
//     }
//     for (let i = 1; i < colNum; i++) {
//         for (let j = 1; j < rowNum; j++) {
//             grid[i][j] += (grid[i - 1][j] < grid[i][j - 1] ? grid[i - 1][j] : grid[i][j - 1])
//         }
//     }
//     console.log(grid)
//     return grid[rowNum - 1][colNum - 1]
// }
console.log(minPathSum(
    [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]))