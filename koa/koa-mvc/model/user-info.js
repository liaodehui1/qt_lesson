const query = require('../util/index')
const md5 = require('md5')
// 注册
const insertData = function(user){
  // 数据库
  // md5 哈希 长度固定 同样的输入同样的输出
  user.password = md5(user.password)
  let sql = "insert into user_info values(null,?,?)"
  return query(sql,[user.name,user.password])
}

const queryByName = function (name) {
  let sql = "select * from user_info where name = ?"
  return query(sql,[name])
}

module.exports = {
  insertData,
  queryByName
}