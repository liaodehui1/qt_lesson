- vuex 数据流  
组件 + 共享数据  
1. 共享状态
- this.$store  
Vue.use(Vuex) Vue.$store  
- this.$store.state  
new Vue({
  store
})  
store = new Vuex.Store({
  state,
  ...
})  
myVuex Vue.use()  
new myVuex.store(option)  
option 四大家族  
- es6的模块化机制  
export default xxx  
index.js Vuex {Store,}  
class get方法  
Store是一个类，四大家族是他的属性  
扩展后所有组件都可以调用  
Vue 钩子函数，beforeCreate  
除了它该做的，再做一下vuex初始化  
```js
Vue.mixin({
  beforeCreate:vueInit
})
```
- 让唯一的store对象，state是属性  
beforeCreate vue该怎样  
再多this.$store =  
this Vue单例 根组件
beforeCreate 之前的代码也要运行，Vue.mixin()  
通过源码认识到所有组件都可以访问$store，是因为他已经成为vue单例属性  
每个组件里的this->本组件->

- this.$store.getters.xxx  
跟state不一样的地方是方法会返回根据state的新的值  
```js
Object.defineProperty(this.$store.getters,xxx,{
  get:()=>{
    数据劫持
    return store.option.getters[xxx]
    return getterFn(store.state)
  }
})
```
defineProperty 是一个个属性定义  
[key,fn]  
forEachVal()  
registerGetter(this,key,fn)  
