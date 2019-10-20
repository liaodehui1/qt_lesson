const userModel = require('../model/user-info')
const md5 = require('md5')
module.exports = async (ctx) => {
  const {name,password} = ctx.request.body
  // console.log(name,password)
  const userInfo = await userModel.queryByName(name)

  if(userInfo.length > 0){
    if(md5(password) === userInfo[0]['password']){
      ctx.body = {
        code:0,
        id:userInfo[0]['id'],
        name:userInfo[0]['name']
      }
    }else{
      ctx.body = {
        code:500,
        msg:'密码错误'
      }
    }
  }else{
    ctx.body = {
      code:500,
      msg:'不存在此用户'
    }
  }
}