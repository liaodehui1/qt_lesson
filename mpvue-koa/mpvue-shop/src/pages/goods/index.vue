<template>
  <div class="goods">
    <div class="swiper">
      <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000">
        <block v-for="(item, index) in gallery" :key="index">
          <!-- swiper-item 自动宽高100% -->
          <swiper-item class="swiper-item">
            <img :src="item.img_url" class="slide-image" />
          </swiper-item>
        </block>
      </swiper>
      <button class="share" hover-class="none" open-type="share" vlaue>分享商品</button>
    </div>
    <div class="swiper-b">
      <div class="item">30天无忧发货</div>
      <div class="item">48小时快速退款</div>
      <div class="item">满88元免邮费</div>
    </div>
    <div class="goods-info">
      <div class="c">
        <p>{{info.name}}</p>
        <p>{{info.goods_brief}}</p>
        <p>￥{{info.retail_price}}</p>
        <div class="brand" v-if="brand.name">
          <p>{{brand.name}}</p>
        </div>
      </div>
    </div>
    <div class="section-nav" @click="showType">
      <div>请选择规格数量</div>
      <div></div>
    </div>
    <!-- 商品参数 -->
    <div class="attribute">
      <div class="head">商品参数</div>
      <div class="item" v-for="(item, index) in attribute" :key="index">
        <div>{{item.name}}</div>
        <div>{{item.value}}</div>
      </div>
    </div>
    <!-- 图片展示 -->
    <div class="detail">
      <wxParse :content="goods_desc"></wxParse>
    </div>
    <!-- 选择规格弹出层 -->
    <div class="pop" v-show="showpop" @click="showType"></div>
    <div class="attr-pop" :class="{fadeup: showpop}">
        <div class="top">
          <div class="left">
            <img :src="info.primary_pic_url" alt="">
          </div>
          <div class="right">
            <p>价格￥{{info.retail_price}}</p>
            <p>请选择数量</p>
          </div>
          <div class="close" @click="showType">x</div>
        </div>
        <div class="b">
          <p>数量</p>
          <div class="count">
            <div class="cut" @click="reduce">-</div>
            <input type="text" class="number" v-model="number" disabled="true">
            <div class="add" @click="add">+</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { get } from "../../utils/index";
import wxParse from 'mpvue-wxparse';

export default {
  data() {
    return {
      gallery: [], // banner
      id: "",
      openId: "",
      info: null,
      brand: {},
      showpop: false,
      number: 0,
      attribute: [],
      goods_desc: ''
    };
  },
  // 商品分享
  onShareAppMessage () {
    return {
      title: this.info.name,
      path: "/pages/goods/main?id" + this.info.id,
      imageUrl: this.gallery[0].img_url
    };
  },
  mounted() {
    this.openId = wx.getStorageSync("openId") || "";
    this.goodsDetail();
  },
  methods: {
    async goodsDetail() {
      const data = await get("/goods/detailaction", {
        id: 1009024,
        openId: this.openId
      });
      console.log(data);
      this.info = data.info;
      this.gallery = data.gallery;
      this.attribute = data.attribute;
      this.goods_desc = data.info.goods_desc
    },
    showType () {
      this.showpop = !this.showpop
    },
    reduce () {
      if (this.number >= 1) {
        this.number -= 1
      }else {
        return false
      }
    },
    add () {
      this.number += 1
    }
  },
  components: {
    wxParse
  }
};
</script>

<style lang="less" scoped>
@import url('~mpvue-wxparse/src/wxParse.css');
@import "./style.less";
</style>