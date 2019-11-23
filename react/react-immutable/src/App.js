import React from 'react';
import './App.css';
import immutable from 'immutable'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ColorRedWrapper from './RedColor'

// react 不可在原数据上直接修改，需复制原数据再修改，量大时耗时
// 不可变
// 结构共享
let immutableArr = immutable.fromJS([2,3,4])
immutableArr.push(5)
console.log(immutableArr.toJS())

let obj = {
  a:1,
  b:{
    c:2
  },
  d:{
    e:3
  }
}
let imObj = immutable.fromJS(obj)
console.log(imObj.getIn(['b','c'],'default'))
let imObj1 = imObj.setIn(['d','e'],'ee') // 返回新对象 不会对原对象修改
console.log(imObj1.toJS())

class App extends React.Component {
  state = {
    store:imObj
  }
  handleSet = () => {
    let store = this.state.store.setIn(['d','e'],'456')
    this.setState({
      store
    })
  }
  render() {
    const {store} = this.state
    return (
      <div>
        <ColorRedWrapper>
          <p>123</p>
          <div>456</div>
        </ColorRedWrapper>
        <button onClick={this.handleSet}>set d</button>
        <Header value={store.get('a')}></Header>
        <Main value={store.get('b')}></Main>
        <Footer value={store.get('d')}></Footer>
      </div>
    )
  }
}

export default App;
