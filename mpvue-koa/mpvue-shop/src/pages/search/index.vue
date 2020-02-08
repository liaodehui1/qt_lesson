<template>
  <div class="search">
    <div class="head">
      <div>
        <img src="../../../static/images/search.png" />
        <input type="text" confirm-type="search" focus="true" 
          placeholder="商品搜素" v-model="words" 
          @focus="inputFocus" @input="tipSearch" @confirm="searchWords"/>
        <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png" class="del"
          @click="clearInput">
      </div>
      <div @click="cancel">取消</div>
    </div>
    <div class="searchtips" v-if="words">
      <div v-for="(item, index) in tipsData" :key="index"
        @click="searchWords" :data-value="item.name">
        {{item.name}}
      </div>
      <div class="nogoods" v-if="tipsData.length === 0">数据库暂无此类商品...</div>
    </div>
    <div class="history" v-if="historyData.length !== 0">
      <div class="t">
        <div>历史记录</div>
        <div @click="clearHistory"></div>
      </div>
      <div class="cont">
        <div v-for="(item, index) in historyData" :key="index"
          @click="searchWords" :data-value="item.keyword">
          {{item.keyword}}
        </div>
      </div>
    </div>
    <div class="history hotsearch">
      <div class="t">
        <div>热门搜索</div>
      </div>
      <div class="cont">
        <div v-for="(item, index) in hotKeywordList" :key="index"
          :class="{active: item.is_hot}" @click="searchWords" :data-value="item.keyword">
          {{item.keyword}}
        </div>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="goodsList" v-if="listData.length">
      <div class="sortnav">
        <div @click="changeTab(0)" :class="{active: nowIndex === 0}">综合</div>
        <div @click="changeTab(1)" class="price"
          :class="{active: nowIndex === 1, desc: order === 'desc', asc: order === 'asc'}">
          价格
        </div>
        <div @click="changeTab(2)" :class="{active: nowIndex === 2}">分类</div>
      </div>
      <div class="sortlist">
        <div class="item" v-for="(item, index) in listData" :key="index"
          @click="goodsDetail(item.id)">
          <img :src="item.list_pic_url" />
          <p class="name">{{item.name}}</p>
          <p class="price">￥{{item.retail_price}}</p>
        </div>
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
     defaultKeyword: '',
     hotKeywordList: [],
     historyData: [],
     tipsData: [],
     order: '',
     listData: [],
     nowIndex: 0
   }
 },
 mounted () {
   this.openId = wx.getStorageSync('openId') || '';
   this.getHotData()
 },
 methods: {
   clearInput () {
     this.words = '',
     this.listData = []
   },
   cancel () {
     wx.navigateBack({
       delta: 1
     });
   },
   async clearHistory () {
     const data = await post('/search/clearhistoryaction', {
       openId: this.openId
     })
    //  console.log(data)
    if (data) {
      this.historyData = []
    }
   },
   inputFocus () {
     // 商品清空
     this.listData = []
     // 展示搜索提示
     this.tipSearch()
   },
   async tipSearch () {
     const data = await get('/search/helperaction', {
       keyword: this.words
     })
    //  console.log(data)
    this.tipsData = data.keywords
   },
   async searchWords (e) {
    // console.log(e)
    let value = e.currentTarget.dataset.value || e.target.value
    this.words = value || this.words
    const data = await post('/search/addhistoryaction', {
      openId: this.openId,
      keyword: value || this.words
    })
    // console.log(data)
    this.getHotData()
    this.getListData()
   },
   async getHotData (first) {
     const data = await get('/search/indexaction?openId=' + this.openId)
     this.defaultKeyword = data.defaultKeyword
     this.historyData = data.historyData
     this.hotKeywordList = data.hotKeywordList
    //  console.log(data)
   },
   async getListData () {
     // 获取商品列表
    const data = await get('/search/helperaction', {
      keyword: this.words,
      order: this.order
    })
    //  console.log(data)
    this.listData = []
    this.listData = data.keywords
   },
   changeTab (index) {
     this.nowIndex = index
     if (index) {
       this.order = this.order === 'asc' ? 'desc' : 'asc'
     } else {
       this.order = ''
     }
   },
   goodsDetail (id) {
     wx.navigateTo({
       url: '/pages/goods/main?id=' + id
     });
   }
 }
};
</script>

<style lang="less" scoped>
@import './style.less';
</style>