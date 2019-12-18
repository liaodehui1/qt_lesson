const debounce = (fn,delay = 1000) => {
  let timer = null;
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this,args)
    },delay)
  }
}