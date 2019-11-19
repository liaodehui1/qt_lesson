class Watcher {
  constructor(opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {}

    for(let key in opts.data) {
      this.setData(key,opts.data[key])
    }
  }

  // 获取类型
  getBaseType(target) {
    const type = Object.prototype.toString.call(target) // [object type]
    return type.slice(8,-1)
  }

  setData(_key,_val) {
    // _key属性挂载到this(vm) 不需要data
    Object.defineProperty(this,_key,{
      get:function() {
        return this.$data[_key]
      },
      set:function(val) {
        const oldVal = this.$data[_key]
        if(oldVal === val){
          return val
        }else {
          this.$data[_key] = val
          this.$watch[_key] && typeof this.$watch[_key] === 'function' 
            ? (this.$watch[_key].call(this,val,oldVal)) : null
          console.log(this)
        }
        return val
      }
    })
  }
}


let vm = new Watcher({
  data:{
    a:0,
    b:'hello'
  },
  watch: {
    a(newVal,oldVal) {
      console.log(newVal,oldVal)
    }
  },
})

setTimeout(() => {
  vm.a = 1
  console.log('wm:',vm)
},1000)