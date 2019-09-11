## vue+stylus
1. 安装
    + npm i stylus stylus-loader --save-dev(或-D)
        - --save-dev 和 -save
            * --save-dev  
                项目部署**不需要**  
                npm i --production 时**不会**下载模块  
                模块写在**devDependencies**  
            * --save  
                项目部署**需要**  
                npm i --production 时**会**下载模块  
                模块写在**dependencies**  
2. 使用
    + style内联 设置lang="stylus"
    + 导入
        - js导入 import '../xxx.styl'
        - style内部导入 @import '../xxx.styl'

## axios
+ 由于使用vue不要要操作DOM元素 不使用jQuery
+ 替代vue-resource
+ Vue.prototype.$http=axios 将axios挂载到vue原型链上 所有vue实例可调用
## vue组件传参
1. 父组件向子组件传参
    + 在父组件使用的子组件上设置绑定属性
    + 子组件添加props对象属性 内部有同名对象(type:Object 要求子组件必须传对象)
        - props 可以为字符串数组/对象
    + 父子组件传参 单向数据流 
        - JS中数组和对象是引用传入 故修改子组件修改将会影响父组件

## 知识点
+ $event
    1. 处理事件函数不带() event将作为实参自动传入
    2. 带了() 需要使用$event传入事件对象
+ ref
    - vue 获取DOM元素 this.$refs.name
    - 如同data-*属性 -> dataset
    - ref -> $refs
    - 初始渲染无法获取到 在渲染完成才能完成 **在mounted(){}/this.$nextTick(()=>{})中调用
    1. 加在普通元素上 获取dom元素
    2. 加在子组件上 获取组件实例
+ v-show与v-if区别
    1.  v-show 控制元素隐藏与否 false时 DOM元素存在但style="display:none"
    2. v-if false时 DOM元素不存在
    - 对于频繁消失、出现的元素使用v-show
+ $nextTick
    - 当在created时期操作dom元素时 操作必须放在$nextTick回调函数内
    - $nextTick回调函数将会在DOM更新完成后执行