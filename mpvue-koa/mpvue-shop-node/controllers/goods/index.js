const { mysql } = require('../../mysql')

// 商品详情页数据
async function detailAction (ctx) {
  const goodsId = ctx.query.id
  const openId = ctx.query.openId

  // 商品信息
  const info = await mysql('nideshop_goods').where({
    'id': goodsId
  }).select()

  // 获取商品图片
  const gallery = await mysql('nideshop_goods_gallery').where({
    'goods_id': goodsId
  })

  // 商品参数
  // 关联查询 nideshop_goods_attribute和nideshop_attribute两张表
  const attribute = await mysql('nideshop_goods_attribute')
    .leftJoin('nideshop_attribute', 'nideshop_goods_attribute.attribute_id', 'nideshop_attribute.id')
    .where({ 'nideshop_goods_attribute.goods_id': goodsId })
    .column('nideshop_goods_attribute.value', 'nideshop_attribute.name')
    .select()

  // 常见问题
  const issue = await mysql('nideshop_goods_issue').select()

  // 大家都在看
  const productList = await mysql('nideshop_goods').where({
    'category_id': info[0].category_id
  }).select()

  // 判断是否收藏过
  let collected = false
  const isCollect = await mysql('nideshop_collect').where({
    'user_id': openId,
    'value_id': goodsId
  }).select()
  if (isCollect.length > 0) {
    collected = true
  }

  // 该用户的购物车是否含有此商品
  let allnumber = 0
  const oldNumber = await mysql('nideshop_cart').where({
    'user_id': openId
  }).column('number').select()
  if (oldNumber.length > 0) {
    for(let i = 0; i < oldNumber.length; i++) {
      const element = oldNumber[i]
      allnumber += element.number
    }
  }

  ctx.body = {
    info: info[0] || {},
    gallery,
    attribute,
    issue,
    productList,
    collected,
    allnumber
  }
}

module.exports = {
  detailAction
}