import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './order';

let _state 
function myUseState(initState) {
  _state = _state || initState
  function setState (newState) {
    _state = newState
    render()
  }
  return [_state, setState]
}

let _deps = {
  args: null
}
function  myUseEffect (cb, args) {
  let hasChange = args && args.some((arg, index) => {
    return _deps.args && arg !== _deps.args[index]
  })
  if (hasChange || !_deps.args) {
    cb()
    _deps.args = args
  }
}

let _depsMemo = {
  args: null,
  value: null
}
function myUseMemo (cb, args) {
  let hasChange = args && args.some((arg, index) => {
    return _depsMemo.args && arg !== _depsMemo.args[index]
  })
  if (hasChange || !_depsMemo.args) {
    _depsMemo.value = cb()
    _depsMemo.args = args
  }
  return _depsMemo.value
}

function myUseCallback (cb, args) {
  return myUseMemo(() => cb, args)
}

function Counter () {
  const [count, setCount] = myUseState(0)
  console.log(count)
  myUseEffect(() => {
    console.log('did mounted')
  }, [])
  let res = myUseMemo(() => {
    return count + 1
  }, [count])
  return (
    <div>
      count: {count} <br />
      res: {res} <br />
      <button onClick={() => {
        setCount(Math.random())
      }}>btn</button>
    </div>
  )
}

function render () {
  ReactDOM.render(<Counter />, document.getElementById('root'));
}

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 数组 链表
// 第一次渲染
// [{_state: 0}, {_deps: {args}}, {_depsMemo:{args, value}}]
// 第二次渲染 按顺序一一取出