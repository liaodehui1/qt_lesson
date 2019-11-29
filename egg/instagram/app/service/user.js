const Service = require('egg').Service

// sql及存储业务的组织
const uuid = require('uuid')
const crypto = require('crypto')
class UserService extends Service {
  async register(user) {
    const { ctx, app} = this
    user.user_id = uuid.v4().replace(/-/g,'')
    // console.log(user.user_id)
    // password 不能存明文
    user.password = 
      crypto.createHmac('sha256', app.config.password_secret)
      .update(user.password).digest('hex')
    // console.log(user,'---------')
    const userInfo = await ctx.model.User.create(user)
    console.log(userInfo,'-------')
    ctx.status = 200
    ctx.body = {
      msg:'注册成功',
      user_id: user.user_id,
      flag: true
    }
    return userInfo.dataValues
  }
}

module.exports = UserService