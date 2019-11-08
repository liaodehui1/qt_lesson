import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import {createStore} from 'redux'
import Layout from './Layout'
import './App.css';

// 决定Store长什么样
// state 上一份state
// action 提交过来的
function reducer(state, action) {
  if(!state){
    return {
      count: 4
    }
  }
  const {count} = state
  if(action.type === 'ADD'){
    return {
      // 全新对象
      count:count + 1
    }
  }
  if(action.type === 'SUB'){
    return {
      count: count - 1 
    }
  }
}
const store = createStore(reducer)
store.subscribe(() => {
  ReactDOM.render(<Counter></Counter>,document.getElementById('root'))
})
class Counter extends Component {
  add = () => {
    console.log('add')
    store.dispatch({
      type:'ADD'
    })
  }
  sub = () => {
    store.dispatch({
      type:'SUB'
    })
  }
  render() {
    // console.log('store:',store)
    return (
      <div>
        <p>count: {store.getState().count}</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter></Counter>,document.getElementById('root'))

// 一切皆组件
// react-router 1. dom 2. native 3. 内存
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Layout}></Route>
      </BrowserRouter>
    )
  }
}
export default App;
