let g = [
  [1],
  [0, 2, 3],
  [1],
  [1, 4, 6],
  [3, 5],
  [4, 6],
  [3, 5]
]
let n = g.length
// dfn 节点的遍历时间戳（顺序）
// low 节点不经过父节点所能到达的最先遍历的节点
const dfn = Array(n).fill(-1), low = Array(n).fill(-1);
let stp = 0;
const ans = [];
const dfs = (idx, fa) => {
  // 首先将当前节点的 dfn 和 low 都设为遍历序号
  dfn[idx] = low[idx] = stp++;

  for (const v of g[idx]) {
    // 通过 dfn 值判断是否已经遍历该点，默认值为 -1.
    if (dfn[v] < 0) {
      // 向下递归，传入节点和其父节点
      dfs(v, idx);
      // 到这里 low[v] 应该已经算好了
      // 当前节点的 low 值是子节点 low 值得最小值
      low[idx] = Math.min(low[idx], low[v]);
      // 到这里当前节点的 dfn 和 子节点 的 low 都更新好了,由于回溯更新low已是最小编号
      if (dfn[idx] < low[v]) ans.push([idx, v]);
    } else if (v != fa) {  // 不通过父节点
      // 如果v比当前节点被遍历到的时间早
      low[idx] = Math.min(low[idx], dfn[v]);
    }
  }
}

dfs(0,-1)
console.log(ans)