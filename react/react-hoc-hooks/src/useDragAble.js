import React,{useState} from 'react'

// hooks
// 自定以hooks 方法名以use开头
function useDragAble() {
  let [left,setLeft] = useState(0)
  let [top,setTop] = useState(0)
  const handleMouseMove = function(e) {
    let left = e.clientX
    let top = e.clientY
    setLeft(left)
    setTop(top)
  }
  const handleMouseUp = function() {
    document.removeEventListener('mousemove',handleMouseMove)
  }
  const handleDown = function() {
    document.addEventListener('mousemove',handleMouseMove)
    document.addEventListener('mouseup',handleMouseUp)
  }
  return {
    style:{
      left,
      top
    },
    handleDown
  }
}

export default useDragAble