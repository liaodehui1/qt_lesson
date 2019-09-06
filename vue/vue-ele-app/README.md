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
+ 由于使用vue不要要操作DOM元素 不适用jQuery
+ 替代vue-resource
+ Vue.prototype.$http=axios 将axios挂载到vue原型链上 所有vue实例可调用
## vue组件传参
1. 父组件向子组件传参
    + 在父组件使用的子组件上设置绑定属性
    + 子组件添加props对象属性 内部有同名对象(type:Object 要求子组件必须传对象)

