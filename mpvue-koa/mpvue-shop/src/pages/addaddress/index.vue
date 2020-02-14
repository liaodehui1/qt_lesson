<template>
  <div class="addaddress">
    <div class="item">
      <input type="text" placeholder="姓名" v-model="userName" />
    </div>
    <div class="item">
      <input type="text" placeholder="手机号码" v-model="telNumber" />
    </div>
    <div class="item">
      <picker mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem">
        <input type="text" placeholder="省份、城市、区县" v-model="address" />
      </picker>
    </div>
    <div class="item">
      <input type="text" placeholder="详细地址、如楼道、楼盘号等" v-model="detailaddress" />
    </div>
    <div class="item itemend">
      <checkbox-group @click="checkboxChange">
        <label class="checkbox">
          <checkbox class="box" :checked="checked" color="#b4282d"></checkbox>
          设置为默认地址
        </label>
      </checkbox-group>
      <div @click="wxaddress">一键导入微信</div>
    </div>
    <div class="bottom" @click="saveAddress">保存</div>
  </div>
</template>

<script>
import { get, post, getStoregeOpenId } from '../../utils/index'

export default {
  data() {
    return {
      userName: "",
      telNumber: "",
      region: [],
      customItem: "全部",
      address: "",
      detailaddress: "",
      res: {},
      id: '',
      checked: false
    };
  },
  mounted () {
    // 重置data数据
    // this.$data 当前data状态
    // this.$options.data data初始状态
    Object.assign(this.$data, this.$options.data())
    this.openId = getStoregeOpenId()
    if (this.$root.$mp.query.res) {
      this.res = JSON.parse(decodeURIComponent(this.$root.$mp.query.res))
      this.userName = this.res.userName
      this.telNumber = this.res.telNumber
      this.address = `${this.res.provinceName} ${this.res.cityName} ${this.res.countyName}`
      this.detailaddress = this.res.detailInfo
    }
    if (this.$root.$mp.query.id) {
      this.id = this.$root.$mp.query.id
      this.getDetail()
    }
  },
  methods: {
    bindRegionChange () {},
    wxaddress () {},
    saveAddress () {},
    async getDetail () {
      const data = await get('/address/detailaction', {
        id: this.id
      })
      console.log(data)
      this.userName = data.detailData.name
      this.telNumber = data.detailData.mobile
      this.address = data.detailData.address
      this.detailaddress = data.detailData.address_detail
      this.checked = data.detailData.is_default === 1 ? true : false
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>