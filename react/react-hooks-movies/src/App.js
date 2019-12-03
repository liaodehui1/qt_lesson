import React, {useMemo, useState, useCallback,useEffect} from 'react';
import './App.css';

let set1 = new Set()
let set2 = new Set()
function App() {
  // state = {count: 0}
  let [count, setCount] = useState(0)
  let [time, setTime] = useState(0)
  // 也会变化
  // const calculate = count + ',' + time

  // 只有count变化calculate才会变化
  const calculate = useMemo(() => count + ',' + time, [count])

  const fn1 = () => count + ',' + time
  // memorize
  const fn2 = useCallback(() => count + ',' + time, [count])
  set1.add(fn1)
  set2.add(fn2)

  // 模拟生命周期
  useEffect(() => {
    console.log(123)
    return () => {
      // unMount 卸载
      // 每次组件重新渲染,都会执行
      // clearTimer()
      console.log('卸载')
    }
  },[])
  return (
    <div>
      <div>time: {time}</div>
      <div>count: {count}</div>
      <div>calculate: {calculate}</div>
      <div>{set1.size} vs {set2.size}</div>
      <button onClick={() => {setCount(++count)}}>count++</button>
      <button onClick={() => {setTime(Date.now)}}>time change</button>
    </div>
  )
}

export default App;
