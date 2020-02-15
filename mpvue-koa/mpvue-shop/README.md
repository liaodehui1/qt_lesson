# mpvue-shop
## 项目启动
npm run dev
## 所学到的
1. vue的$set
- 当`this.listIds[index] = false`时 **vue2**无法监听数组变化
- Vue.js 扩展了观察数组，为它添加了一个 $set() 方法
- vm.$set( target, propertyName/index, value )
2. 重置data状态  
使用 Object.assign(this.$data, this.$options.data());
- this.$data 当前data状态
- this.$options.data data初始状态
3. onShow与mounted  
onShow在每次页面显示时都会执行，而mounted在navigateBack时却不会执行
3. div:nth-child(n)  
先找到父元素下第n个元素，看是否为div元素，是则样式生效，否则无效
4. class绑定  
- :class="{样式名: 条件}"
- :class="{条件 ? 样式名 : ''}"
5. 原生checkbox的`:checked="checked"`在选中或取消选中时checked不变化
```html
<!-- 内部chackbox选择情况变化时触发checkboxChange -->
<checkbox-group @change="checkboxChange">
  <label class="checkbox">
  <!-- checkbox需要value属性 -->
    <checkbox class="box" value="true" :checked="checked" color="#b4282d"></checkbox>设置为默认地址
  </label>
</checkbox-group>
```
```js
checkboxChange(e) {
  this.checked = e.mp.detail.value[0];
}
```
6. mpvue 页面跳转传参
获取参数使用：`this.$root.$mp.query.arg`