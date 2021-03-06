const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async(ctx, next) => {
  await userService.getAllUsers()
  .then((res) => {
    console.log('打印结果' + JSON.stringify(res))
    ctx.body = res
  })
})

// 注册
router.post('/userRegister',async(ctx,next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  let _nickname = ctx.request.body.nickname
  if(!(_username && _userpwd && _nickname)){
    ctx.body = {
      code:'80001',
      mess:'用户名呢称密码不能为空'
    }
    return
  }
  
  await userService.findUser(_username).then(async (res) => {
    if(res.length){
      try{
        throw Error('用户名已存在')
      }catch(err){
        console.log(err)
      }
      ctx.body = {
        code:'80003',
        data:'error',
        mess:'用户名已存在'
      }
    }else{
      await userService.insertUser([_username,_userpwd,_nickname])
        .then(res => {
          let r = ''
          if(res.affectedRows != 0){
            r = 'ok'
            ctx.body = {
              code:'80000',
              data: r,
              mess:'注册成功'
            }
          }else{
            r = 'error'
            ctx.body = {
              code:'80004',
              data: r,
              mess:'注册失败'
            }
          }
        })
    }
  })
})

// 登录
router.post('/userLogin',async(ctx,next) => {
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd
  await userService.userLogin(_username,_userpwd)
    .then((res) => {
      let r = ''
      if(res.length){
        r = 'ok'
        let result = {
          id: res[0].id,
          nickname: res[0].nickname,
          username: res[0].username
        }
        ctx.body = {
          code: '80000',
          data: result,
          mess: '登录成功'
        }
      }else{
        r = 'error'
        ctx.body = {
          code: '80004',
          data: r,
          mess: '账号或密码错误'
        }
      }
    }).catch(err => {
      ctx.body = {
        code: '80002',
        mess: err
      }
    })
})
// 根据分类名称查找对应的笔记列表
router.post('/findNoteListByType', async (ctx, next) => {
  let note_type = ctx.request.body.note_type
  await userService.findNoteListByType(note_type)
    .then(async (res) => {
      let r = ''
      if (res.length) {
        r = 'OK'
        ctx.body = {
          code: 800000,
          data: res,
          mess: '查找成功'
        }
      } else {
        r = 'error',
        ctx.body = {
          code: 800004,
          data: r,
          mess: '查找失败'
        }
      }
    }).catch( err => {
      ctx.body = {
        code: 800002,
        data: err
      } 
    })
})
// 根据笔记列表的id查找笔记的详情
router.post('/findNoteDetailById',async(ctx,next) => {
  let id = ctx.request.body.id
  await userService.findNoteDetailById(id)
    .then(async (res) => {
      let r = ''
      if(res.length){
        r = 'ok'
        ctx.body = {
          code:'800000',
          data:res[0],
          mess:'查找成功'
        }
      }else{
        r = '查询失败'
        ctx.body = {
          code:'800004',
          data:r
        }
      }
    }).catch((err) => {
      ctx.body = {
        code:'800002',
        data:err
      }
    })
})
// 发布笔记
router.post('/insertNote',async(ctx,next) => {
  // console.log(ctx.request.body)
  let note = ctx.request.body
  await userService.insertNote(note)
    .then(res => {
      let r = ''
      if(res.affectedRows != 0){
        r = 'ok'
        ctx.body = {
          code:'800000',
          data: r,
          mess:'发布成功'
        }
      }else{
        r = 'error'
        ctx.body = {
          code:'800004',
          data: r,
          mess:'发布失败'
        }
      }
    })
})
module.exports = router
