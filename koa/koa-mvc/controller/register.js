const userModel = require('../model/user-info')

const register = async (ctx) => {
  // 注册
  const user = ctx.request.body
  let insertRes = await userModel.insertData(user)
  // console.log('插入数据库的结果',insertRes)
  ctx.body = insertRes
}

module.exports = register