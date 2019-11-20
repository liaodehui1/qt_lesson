import React,{useState} from 'react';
import Drag from './Drag1'
import withDragAble from './withDragAble'
import './App.css';
import useDrag from './useDragAble'

// react15 function 组件没有state、this、生命周期
// 只负责单纯地接受props和渲染

// react16
// hooks 作用：组件之间逻辑复用，相比hoc 解决了那些问题
// 让逻辑扁平化
// Promise => async
function Handle() {
  return (
    <h2>h2</h2>
  )
}
function Footer() {
  // state hooks
  const [count,setCount] = useState(0) // state = {0}
  const {style,handleDown} = useDrag()
  return (
    <div style={style} 
      className="drag" 
      onMouseDown={handleDown}>
      Footer: {count}
      <button onClick={() => {
        let count1 = count + 1
        setCount(count1)
      }}>+</button>
    </div>
  )
}
const Drag2 = withDragAble(Handle)
class App extends React.Component {
  render() {
    return (
      <>
        {/* <Drag></Drag> */}
        {/* <Drag2></Drag2> */}
        <Footer></Footer>
      </>
    )
  }
}

export default App;
