const _ = require('lodash')
const fs = require('fs')
const path = require('path')

// 映射文件夹下的文件为模块
const mapDir = d => {
  const tree = {}
  // 获取当前文件夹下的所有文件夹和文件，分为文件夹和文件两组
  const [dirs, files] = _(fs.readdirSync(d)).partition(p => fs.statSync(path.join(d, p)).isDirectory())
  // 映射文件夹
  dirs.forEach(dir => {
    tree[dir] = mapDir(path.join(d, dir))
  })
  // 映射文件
  files.forEach(file => {
    // 获取文件后缀名字
    if (path.extname(file) === '.js') {
      tree[path.basename(file, '.js')] = require(path.join(d, file))
    }
  })
  return tree
}

// console.log(mapDir(path.join(__dirname)))
// 抛出当前文件夹下的结构树
module.exports = mapDir(path.join(__dirname))