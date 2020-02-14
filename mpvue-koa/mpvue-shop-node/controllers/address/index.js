const { mysql } = require('../../mysql')

// 获取地址列表
async function getListAction (ctx) {
  const { openId } = ctx.query
  const addressList = await mysql('nideshop_address').where({
    'user_id': openId
  }).orderBy('is_default', 'desc').select()
  ctx.body = {
    addressList: addressList.length ? addressList : []
  }
}

// 获取详细地址
async function detailAction (ctx) {
  const { id } = ctx.query

  const detailData = await mysql('nideshop_address').where({
    'id': id
  }).select()

  ctx.body = {
    detailData: detailData.length ? detailData[0] : {}
  }
}

module.exports = {
  getListAction,
  detailAction
}