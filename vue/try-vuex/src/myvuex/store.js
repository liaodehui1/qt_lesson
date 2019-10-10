export class Store{
  constructor(options,Vue){
    console.log(options)
    // 让this.$store找到.state
    this.options = options
    // this.state = this.options.state
    // 混合，扩展vue
    Vue.mixin({
      beforeCreate:vuexInit
    })

    this.getters = {}
    forEachValue(options.getters,(getterFn,getterName)=>{
      // console.log(getterFn,getterName)
      registerGetter(this,getterName,getterFn)
    })
  }
  // this.$store.state.count
  // 在获取的同时还可以做其他事情
  get state(){
    console.log('get 获取属性')
    return this.options.state
  }
  set state(val){
    throw new Error('不可以直接操作')
  }
}

//this.$store
function vuexInit(){
  // console.log("实例化之前")
  // vue {el:...}->option->options
  const options = this.$options
  if(options.store){//已有
    // this指向vue
    this.$store = typeof options.store === 'function' ? options.store() : options.store
  }else if(options.parent && options.parent.$store){
    this.$store = options.parent.$store
  }
}

function forEachValue(obj,fn){
  Object.keys(obj).forEach(key=>fn(obj[key],key))
}

function registerGetter(store,getterName,getterFn){
  // console.log(store)
  Object.defineProperty(store.getters,getterName,{
    get:()=>{
      return getterFn(store.state)
    }
  })
}

// export function install(){

// }
