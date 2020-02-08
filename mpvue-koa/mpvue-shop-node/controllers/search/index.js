const { mysql } = require('../../mysql')

// 添加搜索历史记录
async function addHistoryAction (ctx) {
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

// 获取记录
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

// 清空历史记录
async function clearHistoryAction (ctx) {
  const { openId } = ctx.request.body
  // console.log(openId)
  const data = await mysql('nideshop_search_history').where({
    'user_id': openId
  }).del()
  // console.log(data) //删除行数
  if (data) {
    ctx.body = {
      'data': '清除成功'
    }
  }else {
    ctx.body = {
      'data': null
    }
  }
}

// 搜索匹配内容
async function helperAction (ctx) {
  const keyword = ctx.query.keyword
  let order = ctx.query.order
  if (!order) {
    order = ''
    orderBy = 'id'
  }else {
    orderBy = 'retail_price'
  }
  const keywords = await mysql('nideshop_goods').where('name', 'like', `%${keyword}%`)
    .orderBy(orderBy, order)
    .column('id', 'name', 'list_pic_url', 'retail_price')
    .limit(10).select()
  if (keywords) {
    ctx.body = {
      keywords
    }
  }else {
    ctx.body = {
      keywords: []
    }
  }
}

module.exports = {
  addHistoryAction,
  indexAction,
  clearHistoryAction,
  helperAction
}