<template>
  <div class="search">
    <div class="head">
      <div>
        <img src="../../../static/images/search.png" />
        <input type="text" confirm-type="search" focus="true" 
          placeholder="商品搜素" v-model="words" 
          @focus="inputFocus" @input="tipsearch" @confirm="searchWords"/>
        <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png" class="del"
          @click="clearInput">
      </div>
      <div @click="cancel">取消</div>
    </div>
    <div class="searchtips" v-if="words">
      <div>牙刷</div>
      <div class="nogoods">数据库暂无此类商品</div>
    </div>
    <div class="history">
      <div class="t">
        <div>历史记录</div>
        <div @click="clearHistory"></div>
      </div>
      <div class="cont">
        <div>日式</div>
      </div>
    </div>
    <div class="history hotsearch">
      <div class="t">
        <div>热门搜索</div>
        <div @click="clearHistory"></div>
      </div>
      <div class="cont">
        <div class="active">日式</div>
        <div>日式</div>
        <div>日式</div>
      </div>
    </div>
  </div>
</template>

<script>
import { post, get } from '../../utils/index'

export default {
 data () {
   return {
     words: '',
     openId: '',
     hotKeywordList: [],
     historyData: []
   }
 },
 mounted () {
   this.openId = wx.getStorageSync('openId') || '';
   this.getHotData()
 },
 methods: {
   clearInput () {
     this.words = ''
   },
   cancel () {
     
   },
   clearHistory () {
     
   },
   inputFocus () {

   },
   tipsearch () {

   },
   async searchWords (e) {
    //  console.log(e)
    let value = e.target.value
    this.words = value || this.words
    const data = await post('/search/addhistoryaction', {
      openId: this.openId,
      keyword: value || this.words
    })
    // console.log(data)
    this.getHotData()
   },
   async getHotData (first) {
     const data = await get('/search/indexaction?openId=' + this.openId)
     this.historyData = data.historyData
     this.hotKeywordList = data.hotKeywordList
     console.log(data)
   }
 }
};
</script>

<style lang="less" scoped>
@import './style.less';
</style>