import {track,trigger} from './effect.js'
export function reactive(target){
  const observed = new Proxy(target,{
    set:(target,key,value) => {
      const result = Reflect.set(target,key,value)
      trigger(target,key)
      return result
    },
    get:(target,key,receiver) => {
      // mobx 也有 effect 也有依赖收集
      // 依赖收集
      console.log('依赖收集')
      const res = Reflect.get(target,key,receiver)
      track(target,'get',key)
      return res
    }
  })
  return observed
}