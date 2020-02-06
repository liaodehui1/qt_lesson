const { mysql } = require('../../mysql')

// 添加搜索历史记录
async function addhistoryAction (ctx) {
  const { openId, keyword } = ctx.request.body
  // console.log(openId, keyword)
  const oldData = await mysql('nideshop_search_history').where({
    'user_id': openId,
    'keyword': keyword
  })
  if (oldData.length == 0) {
    const data = await mysql('nideshop_search_history').insert({
      'user_id': openId,
      'keyword': keyword,
      'add_time': parseInt(new Date().getTime() / 1000)
    })
    if (data) {
      ctx.body = {
        data: 'success'
      }
    }else {
      ctx.body = {
        data: 'fail'
      }
    }
  }else {
    ctx.body = {
      data: '已经有记录了'
    }
  }
}

async function indexAction (ctx) {
  const openId = ctx.query.openId
  // 默认关键字
  const defaultKeyword = await mysql('nideshop_keywords').where({
    is_default: 1
  }).limit(1).select()
  // 热门关键字
  const hotKeywordList = await mysql('nideshop_keywords')
    .distinct('keyword').column('keyword', 'is_hot') //distinct 过滤掉多余的重复记录只保留一条
    .limit(10).select()
  
  const historyData = await mysql('nideshop_search_history').where({
    'user_id': openId
  }).limit(10).select()

  ctx.body = {
    'defaultKeyword': defaultKeyword[0],
    'hotKeywordList': hotKeywordList,
    'historyData': historyData
  }
}

module.exports = {
  addhistoryAction,
  indexAction
}