/**
 * Toast插件
 * 如果插件是一个对象，必须提供 install 方法
 */
let Toast={}
Toast.install=function (Vue,options) {
  // console.log('调用install')
  let opt={
    defalutType:'top',//默认显示位置
    duration:1300//默认显示时间
  }
  // 通过Vue.use修改插件内置默认属性
  for(let property in options){
    opt[property]=options[property]
  }
  // $toast实例方法
  Vue.prototype.$toast=(tips,type)=>{
    if(type){
      opt.defalutType=type
    }
    // 防止显示阶段再次出现
    if(document.getElementsByClassName('vue-toast').length){
      return
    }
    // 创建构造器
    let toastTpl=Vue.extend({
      template:`<div class="vue-toast toast-${opt.defalutType}">${tips}</div>`
    })
    // $mount 渲染模板
    // $el 实例关联的DOM元素
    let tpl=new toastTpl().$mount().$el
    // console.log(new toastTpl().$mount())
    // 使用原生 DOM API 把它插入文档中
    document.body.appendChild(tpl)
    setTimeout(()=>{
      document.body.removeChild(tpl)
    },opt.duration)
  }
  // 为$toast添加属性 函数也是对象
  // this.$toast.bottom('tips') 相当于 this.$toast('tips','bottom')
  ['bottom','center','top'].forEach(type=>{
    Vue.prototype.$toast[type]=(tips)=>{
      return Vue.prototype.$toast(tips,type)
    }
  })
}

export {
  Toast
}