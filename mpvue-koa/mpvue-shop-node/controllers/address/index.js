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

// 添加或更新收货地址
async function saveAction (ctx) {
  const {
    userName,
    telNumber,
    address,
    detailaddress,
    checked,
    openId,
    addressId
  } = ctx.request.body
  
  // 是否为默认地址
  if (checked) {
    const isDefault = await mysql('nideshop_address').where({
      'user_id': openId,
      'is_default': 1
    }).select()
    if (isDefault.length) {
      await mysql('nideshop_address').where({
        'user_id': openId,
        'is_default': 1
      }).update({
        'is_default': 0
      })
    } 
  }

  let data = null
  if (!addressId) {
    // 添加地址
    data = await mysql('nideshop_address').insert({
      name: userName,
      mobile: telNumber,
      address: address,
      address_detail: detailaddress,
      user_id: openId,
      is_default: checked == 'true' || checked ? 1 : 0 
    })
  }else {
    data = await mysql('nideshop_address').where({
      'id': addressId
    }).update({
      name: userName,
      mobile: telNumber,
      address: address,
      address_detail: detailaddress,
      user_id: openId,
      is_default: checked == 'true' || checked ? 1 : 0 
    })
  }
  if (data) {
    ctx.body = {
      data : true
    }
  }else {
    ctx.body = {
      data: false
    }
  }
}

module.exports = {
  getListAction,
  detailAction,
  saveAction
}