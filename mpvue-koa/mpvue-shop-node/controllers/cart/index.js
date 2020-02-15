const { mysql } = require('../../mysql')

async function addCart (ctx) {
  const {
    openId,
    goodsId,
    number
  } = ctx.request.body

  // 购物车是否包含此物
  const haveGoods = await mysql('nideshop_cart').where({
    'user_id': openId,
    'goods_id': goodsId
  }).select()
  if (haveGoods.length === 0) {
    const goods = await mysql('nideshop_goods').where({
      'id': goodsId
    }).select()
    const { retail_price, name, list_pic_url } = goods[0]
    await mysql('nideshop_cart').insert({
      'user_id': openId,
      'goods_id': goodsId,
      number,
      'goods_name': name,
      retail_price,
      list_pic_url
    })
  }else {
    const oldNumber = await mysql('nideshop_cart').where({
      'user_id': openId,
      'goods_id': goodsId
    }).column('number').select()
    // 更新数据
    await mysql('nideshop_cart').where({
      'user_id': openId,
      'goods_id': goodsId
    }).update({
      'number': oldNumber[0].number + number
    })
  }
  ctx.body = {
    data: 'success'
  }
}

// 购物车
async function cartList (ctx) {
  const { openId } = ctx.query

  const cartList = await mysql('nideshop_cart').where({
    'user_id': openId
  }).select()

  ctx.body = {
    cartList
  }
}

module.exports = {
  addCart,
  cartList
}