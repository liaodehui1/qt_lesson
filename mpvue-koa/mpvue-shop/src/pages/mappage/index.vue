<template>
  <div class="mappage">
    <div class="section">
      <input type="text" placeholder="搜索" focus="true" 
        v-model="keywords" @input="bindInput">
    </div>
    <scroll-view :scroll-y="true" class="addcont" style="height: 500rpx;">
      <div class="result" v-for="(item, index) in tips" 
        :key="index" @touchstart="bindSearch(item.name)">
        {{item.name}}
      </div>
    </scroll-view>
    <div class="map_container">
      <div class="title">显示当前位置:</div>
      <map id="map" scale="16" class="map" 
        :longitude="longitude"
        :latitude="latitude"
        :markers="markers"></map>
    </div>
  </div>
</template>

<script>
var amapFile = require('../../utils/amap-wx.js');
import { mapMutations } from 'vuex' 

export default {
  data () {
    return {
      tips: [],
      longitude: 0,
      latitude: 0,
      markers: [],
      keywords: ''
    }
  },
  mounted () {
    this.getMapaddress()
  },
  methods: {
    ...mapMutations(['update']),
    getMapaddress () {
      let _this = this
      var myAmapFun = new amapFile.AMapWX({key:'5ab2ff0a483586f74e71fe2e638878e0'});
      myAmapFun.getRegeo({
        iconPath: '/static/images/marker.png',
        iconWidth: 22,
        iconHeight: 32,
        success (data) {
          // console.log(data)
          var markers = [{
            id: data[0].id,
            latitude: data[0].latitude,
            longitude: data[0].longitude,
            iconPath: data[0].iconPath,
            width: data[0].width,
            height: data[0].height
          }]
          _this.markers = markers
          _this.longitude = data[0].longitude
          _this.latitude = data[0].latitude
        },
        fail (info) {
          console.log(info)
        }
      })
    },
    bindInput (e) {
      let _this = this
      let keywords = _this.keywords
      var myAmapFun = new amapFile.AMapWX({key:'5ab2ff0a483586f74e71fe2e638878e0'});
      myAmapFun.getInputtips({
        keywords: keywords,
        location: '',
        success: function(data){
          console.log(data)
          if(data && data.tips){
            _this.tips = data.tips
          }
        }
      })
    },
    bindSearch (cityName) {
      this.update({cityName})
      wx.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import './style.less';
</style>