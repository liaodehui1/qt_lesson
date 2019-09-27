function debounce(func,delay){
  let timer;
  return function(...args){
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      func.call(this,...args)
    },delay)
  }
}

export {
  debounce
}