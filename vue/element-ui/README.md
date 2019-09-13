# Element组件
## Messaage消息提示
1. 自定义Toast插件 Toast.js
  + 插件为对象 必须提供install方法
  + 通过在Vue.prototype上挂载实例方法
2. 样式编写 plugins.css
3. main.js全局引入 
  + 使用插件 Vue.use(plugin,options)
    - use时会调用插件install方法
    - install方法调用时会将 Vue 作为参数传入
### extend/extends/mixins
1. extend 实现组件复用 创建组件构造器
2. mixins和extends都是为了拓展组件
  + mixins 对源组件相同项实现逻辑合并 接受对象数组
  + extends 继承源组件，相同项高于源组件 接受一个参数或构造函数