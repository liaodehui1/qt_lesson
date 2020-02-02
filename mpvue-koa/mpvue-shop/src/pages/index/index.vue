<template>
  <div class="index">
    <!-- 头部搜索 -->
    <div class="search">
      <div @click="toMapPage">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品" />
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
      <swiper class="swiper-container"
        indicator-dots="true"
        autoplay="true"
        interval="3000"
        circular="true"
        duration="500">
        <block v-for="(item, index) in banner" :key="index">
          <swiper-item class="swiper-item">
            <image class="slide-image" :src="item.image_url"></image>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="channel">
      <div v-for="(item, index) in channel" :key="index"
        @click="categoryList(item.id)">
        <img :src="item.icon_url" />
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="brand">
      <div class="head">
        品牌制造商直供
      </div>
      <div class="content">
        <div v-for="(item,index) in brandList" :key="index"
          @click="brandDetail(item.id)">
          <div>
            <p>{{item.name}}</p>
            <p class="price">{{item.floor_price}}</p>
          </div>
          <img :src="item.new_pic_url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var amapFile = require('../../utils/amap-wx.js');
import { mapState, mapMutations } from 'vuex'
import { get } from '../../utils/index'

export default {
  data () {
    return {
      banner: [],
      channel: [],
      brandList: []
    }
  },
  computed: {
    ...mapState({
      cityName: state => state.cityName
    })
  },
  mounted () {
    this.getCityName()
    this.getData()
  },
  methods: {
    ...mapMutations(['update']),
    toMapPage () {
      let _this = this
      // 通过wx.getSetting 先查询一下用户是否授权 "scope.record"
      wx.getSetting({
        success: (res) => {
          // 如果没有同意授权， 打开设置
          // console.log(res)
          if (!res.authSetting['scope.userLocation']) {
            wx.openSetting({
              success: res => {
                // 获取授权位置信息
                _this.getCityName()
              }
            })
          }else {
            wx.navigateTo({
              url: '/pages/mappage/main'
            });
          }
        },
        fail: (err) => {
          console.log(err)
        },
        complete: () => {}
      })
    },
    getCityName () {
      let _this = this
      var myAmapFun = new amapFile.AMapWX({key:'5ab2ff0a483586f74e71fe2e638878e0'});
      myAmapFun.getRegeo({
        success: data => {
          // 成功回调
          // console.log(data)
          _this.update({
            cityName: data[0].regeocodeData.addressComponent.city
          })
        },
        fail: info => {
          console.log(info)
          _this.update({
            cityName: '北京'
          })
        }
      })
    },
    async getData () {
      const data = await get('/index/index')
      console.log(data)
      this.banner = data.banner
      this.channel = data.channel,
      this.brandList = data.brandList
    },
    categoryList (id) {
      wx.navgateTo({
        url: 'pages/categorylist/main?id' + id
      })
    },
    brandDetail (id) {
      wx.navgateTo({
        url: 'pages/branddetail/main?id' + id
      })
    }
  } 
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>