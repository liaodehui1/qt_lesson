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
  </div>
</template>

<script>
var amapFile = require('../../utils/amap-wx.js');
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState({
      cityName: state => state.cityName
    })
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
      myAmapFun.getPoiAround({
        success: data => {
          // 成功回调
          console.log(data)
        },
        fail: info => {
          console.log(info)
          _this.update({
            cityName: '北京'
          })
        }
      })
    } 
  } 
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>