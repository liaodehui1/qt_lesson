import ReactDOM from "react-dom";
import React from 'react';

let cursor = 0
let currentComponent = {
  _hook: []
}
const argsHasChanged = (oldArgs, args) => {
  return !oldArgs || (args && args.some((arg,index) => {
    return oldArgs[index] !== arg
  }))
}

function getHookState(i) {
  // console.log(i)
  const hooks = currentComponent._hook
  if(i >= hooks.length) {
    hooks.push({})
  }
  // console.log(hooks)
  return hooks[i]
}

function myUseState(initState) {
  const hooks = getHookState(cursor++)
  hooks._state = [
    hooks._state ? hooks._state[0] : initState,
    function setState(newState) {
      hooks._state[0] = newState
      render()
    }
  ]
  
  return hooks._state
}

function Counter () {
  const [c, setC] = myUseState(5)
  const [d, setD] = myUseState(10)
  return (
    <div>
      c: {c} <br />
      d: {d} <br/>
      <button onClick={() => {
        setC(Math.random())
      }}>setC</button>
      <button onClick={() => {
        setD(Math.random())
      }}>setD</button>
    </div>
  )
}

function render () {
  cursor = 0
  ReactDOM.render(<Counter />, document.getElementById('count'));
}

render()