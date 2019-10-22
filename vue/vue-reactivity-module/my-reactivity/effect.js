let effectStack = []
let targetMap = new Map()
export function effect(fn){
  if(effectStack.indexOf(fn) === -1){
    try{
      effectStack.push(fn)
      fn()
    }finally{
      console.log(effectStack);
      
      // effectStack.pop()
    }
  }
}

export function track(target,type,key){
  // fn
  let effect = effectStack[effectStack.length - 1]
  let dep = targetMap.get(target)
  // 无对象依赖
  if(dep === undefined){
    dep = new Map()
    // 添加依赖
    targetMap.set(target,dep)
  }
  let depMap = dep.get(key)
  if(!depMap){
    depMap = new Set()
    dep.set(key,depMap)
  }
  // 属性添加变化执行方法
  depMap.add(effect)
  console.log(targetMap);
  
}

export function trigger(target,key){
  const keyDeps = targetMap.get(target)
  if(keyDeps){
    let res = keyDeps.get(key) && keyDeps.get(key)
    for(let fn of res){      
      fn && fn()
    }
  }
}