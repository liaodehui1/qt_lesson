<template>
  <div class="address">
    <scroll-view class="addcont" scroll-y="true" style="height: 100%"
      v-if="listData.length">
      <div class="item" v-for="(item, index) in listData" :key="index">
        <div class="list">
          <div class="addresslist">
            <div>
              <span>{{item.name}}</span>
              <div class="moren" v-if="item.is_default">默认</div>
            </div>
            <div class="info" @click="selAddress(item.id)">
              <p>{{item.mobile}}</p>
              <p>{{item.address}}{{item.address_detail}}</p>
            </div>
            <div @click="toDetail(item.id)"></div>
          </div>
        </div>
      </div>
    </scroll-view>
    <div class="center" v-else>
      <p>收货地址在哪里</p>
    </div>
    <div class="bottom">
      <div @click="wxaddress(1)">+新建地址</div>
      <div @click="wxaddress">一建导入微信地址</div>
    </div>
  </div>
</template>

<script>
import { get, getStoregeOpenId } from '../../utils/index'

export default {
  data() {
    return {
      openId: '',
      listData: []
    };
  },
  mounted () {
    this.openId = getStoregeOpenId()
    this.getAddressList()
  },
  methods: {
    toDetail(id) {
      wx.navigateTo({
        url: '/pages/addaddress/main?id=' + id
      });
    },
    selAddress (id) {
      wx.setStorageSync('addressId', id);
      wx.navigateBack({
        delta: 1
      });
    },
    wxaddress(index) {
      if (index === 1) {
        wx.navigateTo({
          url: '/pages/addaddress/main'
        });
      }else {
        wx.chooseAddress({
          success: (result)=>{
            let res = encodeURIComponent(JSON.stringify(result))
            wx.navigateTo({
              url: '/pages/addaddress/main?res=' + res
            });
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      }
    },
    async getAddressList () {
      let _this = this
      const data = await get('/address/getlistaction', {
        openId: this.openId
      })
      console.log(data)
      this.listData = data.addressList
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>