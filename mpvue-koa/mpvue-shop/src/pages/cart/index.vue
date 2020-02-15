<template>
  <div class="cart">
    <div class="top">
      <div>30天无忧退货</div>
      <div>48小时快速退款</div>
      <div>满88元免邮费</div>
    </div>
    <div class="cartlist">
      <div class="item" v-for="(item, index) in cartList" :key="index">
        <div class="con">
          <div class="left">
            <div class="icon" :class="{active: listIds[index]}"
              @click="changeColor(index, item.goods_id)"></div>
            <div class="img">
              <img :src="item.list_pic_url" />
            </div>
            <div class="info">
              <p>{{item.goods_name}}</p>
              <p>￥{{item.retail_price}}</p>
            </div>
          </div>
          <div class="right">
            <div class="num">x{{item.number}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed">
      <div class="left" @click="allCheck" :class="{active: allcheck}">全选({{allCheckedNumber}})</div>
      <div class="right">
        <div>￥{{allPrice}}</div>
        <div @click="orderDown">下单</div>
      </div>
    </div>
  </div>
</template>

<script>
import { get, post, getStoregeOpenId } from "../../utils/index";

export default {
  data: () => ({
    openId: "",
    cartList: [],
    listIds: [],
    allcheck: false
  }),
  onShow() {
    this.openId = getStoregeOpenId();
    this.getListData();
  },
  methods: {
    changeColor (index, id) {
      //当this.listIds[index] = false时 vue2 无法监听数组变化
      // 为了解决 Vue.js 扩展了观察数组，为它添加了一个 $set() 方法
      // vm.$set( target, propertyName/index, value )
      if (this.listIds[index]) {
        this.$set(this.listIds, index, false)
      }else {
        this.$set(this.listIds, index, id)
      }
    },
    allCheck () {
      // 先清空已选
      this.listIds = []
      if (this.allcheck) {
        this.allcheck = false
      }else {
        this.allcheck = true
        // 全部选择
        this.cartList.forEach(item => this.listIds.push(item.goods_id))
      }
    },
    async getListData() {
      const data = await get("/cart/cartlist", {
        openId: this.openId
      });
      console.log(data);
      this.cartList = data.cartList
    },
    orderDown () {
      
    }
  },
  computed: {
    allCheckedNumber () {
      let number = 0
      this.listIds.forEach(item => {
        if (item) {
          number++
        }
      })
      if (number === this.cartList.length && number !== 0) {
        this.allcheck = true
      }else {
       this.allcheck = false
      }
      return number
    },
    allPrice () {
      let sum = 0, len = this.listIds.length
      for (let i = 0; i < len; i++) {
        if (this.listIds[i]) {
          sum += this.cartList[i].retail_price * this.cartList[i].number
        }
      }
      return sum
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>