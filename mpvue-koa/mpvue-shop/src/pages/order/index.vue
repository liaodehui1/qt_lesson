<template>
  <div class="order">
    <div class="address" v-if="address.name" @click="toAddressList">
      <div class="item">
        <div class="list">
          <div class="addresslist">
            <div>
              <span>{{address.name}}</span>
              <div class="moren">默认</div>
            </div>
            <div class="info">
              <p>{{address.mobile}}</p>
              <p>{{address.address + address.address_detail}}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="seladdress" v-else @click="toAdd">请选择默认地址</div>
    <div class="orderbox">
      <div class="item">
        <div>商品合计</div>
        <div>￥{{allPrice}}</div>
      </div>
      <div class="item">
        <div>运费</div>
        <div>免运费</div>
      </div>
      <div class="item">
        <div>优惠券</div>
        <div>暂无</div>
      </div>
    </div>
    <div class="cartlist">
      <div class="item" v-for="(item, index) in goodsList" :key="index">
        <div class="con">
          <div class="left">
            <div class="img">
              <img :src="item.list_pic_url"/>
            </div>
            <div class="info">
              <p>{{item.name}}</p>
              <p>{{item.retail_price}}</p>
            </div>
          </div>
          <div class="right">
            <div class="num">x{{item.number}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div>实付：￥{{allPrice}}</div>
      <div class="pay">支付</div>
    </div>
  </div>
</template>

<script>
import { get, post, getStoregeOpenId } from '../../utils/index'

export default {
  data() {
    return {
      address: {},
      allPrice: 0,
      openId: '',
      addressId: '',
      listData: []
    };
  },
  onShow () {
    this.addressId = wx.getStorageSync('getStoregeOpenId') || ''
    this.openId = getStoregeOpenId();
    this.getDetail()
  },
  methods: {
    toAddressList() {
      wx.navigateTo({
        url: '/pages/addressSelect/main'
      });
    },
    toAdd() {
      wx.navigateTo({
        url: '/pages/addaddress/main'
      });
    },
    async getDetail () {
      const data = await get('/order/detailaction', {
        openId: this.openId,
        addressId: this.addressId
      })
      // console.log(data)
      this.address = data.addressList
      // this.allPrice = data.price
      this.listData = data.goodsList
      this.allPrice = data.goodsList
        .map(item => item.retail_price * item.number)
        .reduce((pre, cur) => pre + cur)
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>