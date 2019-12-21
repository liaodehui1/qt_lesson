class Koa {
  constructor() {
    this.middleWare = []
  }
  use(fn) {
    this.middleWare.push(fn)
  }
  run() {
    // application compose: 中间件
    const dispatch = (i) => {
      let fn = this.middleWare[i]

      fn({ctx: 'ctx'},() => {
        // next 处理下一个中间件
        dispatch(i + 1)
      })
    }
    dispatch(0)
  }
}

module.exports = Koa