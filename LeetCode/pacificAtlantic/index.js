/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * 324ms
 * 遍历每一个陆地，向四周扩散，看是否能达到海洋
 */
var pacificAtlantic = function(matrix) {
    if(matrix.length===0){
        return []
    }
    let m=matrix.length,n=matrix[0].length
    let result=[]
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            let visited=[]
            //左下脚和右上角
            if(i===0&&j===n-1||i===m&&j===0){
                result.push([i,j])
                continue
            }
            let flag1=reachPacific(i,j,matrix,visited)
            visited=[]
            let flag2=reachAtlantic(i,j,matrix,visited)
            if(flag1&&flag2){
                result.push([i,j])
            }
        }
    }
    return result
};
function reachPacific(x,y,matrix,visited){
    let index=x*matrix[0].length+y
    if(x===0||y===0){
        return true
    }

    if(visited.includes(index)){
        return false
    }else{
        visited.push(index)
    }

    if(matrix[x-1][y]<=matrix[x][y]){
      if(reachPacific(x-1,y,matrix,visited)){
          return true
      }
    }
    if(matrix[x][y-1]<=matrix[x][y]){
        if(reachPacific(x,y-1,matrix,visited)){
            return true
        }
    }
    if(x+1<matrix.length&&matrix[x+1][y]<=matrix[x][y]){
        if(reachPacific(x+1,y,matrix,visited)){
            return true
        }
    }
    if(y+1<matrix[0].length&&matrix[x][y+1]<=matrix[x][y]){
        if(reachPacific(x,y+1,matrix,visited)){
            return true
        }
    }
    return false
}
function reachAtlantic(x,y,matrix,visited){
    let index=x*matrix[0].length+y
    if(x===matrix.length-1||y===matrix[0].length-1){
        return true
    }

    if(visited.includes(index)){
        return false
    }else{
        visited.push(index)
    }

    if(matrix[x+1][y]<=matrix[x][y]){
        if(reachAtlantic(x+1,y,matrix,visited)){
            return true
        }
    }
    if(matrix[x][y+1]<=matrix[x][y]){
        if(reachAtlantic(x,y+1,matrix,visited)){
            return true
        }
    }
    if(x-1>=0&&matrix[x-1][y]<=matrix[x][y]){
      if(reachAtlantic(x-1,y,matrix,visited)){
          return true
      }
    }
    if(y-1>=0&&matrix[x][y-1]<=matrix[x][y]){
        if(reachAtlantic(x,y-1,matrix,visited)){
            return true
        }
    }
    return false
}

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * dfs 假设可到达，逆向寻找高位陆地
 */
var dir=[[-1,0],[0,1],[1,0],[0,-1]]
var pacificAtlantic = function(matrix) {
    if(matrix.length===0){
        return []
    }
    let m=matrix.length,n=matrix[0].length
    let reachPacific=new Array(matrix.length)
    // .fill(new Array(matrix[0].length).fill(false))//错误 浅复制 fill的每一项都指向同一个地址下的Array
    for(let i=0;i<reachPacific.length;i++){
        reachPacific[i]=new Array(matrix[0].length).fill(false)
    }
    // console.log(reachPacific)
    let reachAtlantic=new Array(matrix.length)
    // .fill(new Array(matrix[0].length).fill(false))
    for(let i=0;i<reachAtlantic.length;i++){
        reachAtlantic[i]=new Array(matrix[0].length).fill(false)
    }
    // reachPacific[0][0]=true
    // console.log(reachPacific)

    // 上下
    for(let i=0;i<n;i++){
        dfs(reachPacific,0,i,matrix)
        dfs(reachAtlantic,m-1,i,matrix)
    }
    // 左右
    for(let j=0;j<m;j++){
        dfs(reachPacific,j,0,matrix)
        dfs(reachAtlantic,j,n-1,matrix)
    }
    // console.log(reachPacific)
    // console.log(reachAtlantic)
    let result=[]
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(reachPacific[i][j]&&reachAtlantic[i][j]){
                result.push([i,j])
            }
        }
    }
    return result
}
function dfs(arr,i,j,matrix){
    arr[i][j]=true

    for(let k=0;k<4;k++){
        let x=i+dir[k][0]
        let y=j+dir[k][1]
        if(x>=0&&x<matrix.length&&y>=0&&y<matrix[0].length){
            // console.log(i,j,x,y)
            // console.log(arr)
            if(!arr[x][y]&&matrix[x][y]>=matrix[i][j]){
                
                dfs(arr,x,y,matrix)
            }
        }
    }
}
console.log(pacificAtlantic([
    [1,2,2,3,5],
    [3,2,3,4,4],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]]))