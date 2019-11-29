const Controller = require('egg').Controller

class LoginController extends Controller {
 async register() {
    const { ctx } = this
    const {username,password,email} = ctx.request.body
    console.log(username,password,email)
    // ctx.body = {statusCode:200,msg:'注册成功'}
    // controller -> service -> model
    await ctx.service.user.register({username,password,email})
  }

  async loginIn() {

  }
}

module.exports = LoginController