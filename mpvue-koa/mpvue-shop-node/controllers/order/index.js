const { mysql } = require('../../mysql')

async function submitAction (ctx) {
  const { openId, goodsId, allPrice } = ctx.request.body
  // 是否存在订单
  const isOrder = await mysql('nideshop_order').where({
    'user_id': openId,
    'goods_id': goodsId
  }).select()
  if (isOrder.length > 0) {
    const data = await mysql('nideshop_order').where({
      'id': isOrder[0].id
    }).update({
      'allPrice': allPrice
    })
    // console.log(data) // 更新行数
    if (data) {
      ctx.body = {
        status: true,
        id: isOrder[0].id
      }
    }else {
      ctx.body = {
        status: false,
        data: null
      }
    }
  }else {
    const data = await mysql('nideshop_order').insert({
      'user_id': openId,
      'goods_id': goodsId,
      'allPrice': allPrice
    })
    // console.log(data) // 该行[id]
    if (data) {
      ctx.body = {
        status: true,
        id: data
      }
    }else {
      ctx.body = {
        status: false,
        data: null
      }
    }
  }
}

async function detailAction (ctx) {
  const { openId, addressId, id } = ctx.query
  // console.log(id)
  const orderDetail = await mysql('nideshop_order').where({
    'user_id': openId,
    'id': id
  }).select()

  let goods_id = orderDetail.length ? orderDetail[0].goods_id.split(',') : []
  const list = await mysql('nideshop_cart').andWhere({
    'user_id': openId
  }).whereIn('goods_id', goods_id).select()

  // 收货地址
  let addressList = []
  if (addressId) {
    addressList = await mysql('nideshop_address').where({
      'user_id': openId,
      'id': addressId
    }).orderBy('is_default', 'desc').select()
  }else {
    addressList = await mysql('nideshop_address').where({
      'user_id': openId
    }).orderBy('is_default', 'desc').select()
  }

  ctx.body = {
    price: orderDetail[0].allprice,
    goodsList: list,
    addressList: addressList[0] || {}
  }
}

module.exports = {
  submitAction,
  detailAction
}