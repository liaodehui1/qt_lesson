import React,{Component} from 'react'
import Child2 from './Child2'

class Child1 extends Component {
  state = {
    data:1
  }
  componentWillMount() {
    const {list} = this.props
    console.log('componentWillMount1')
    this.setState({
      list 
    })
  }
  componentDidMount() {
    console.log('componentDidMount1')
    this.interval = setInterval(() => {
      console.log(123456)
    },3000)
  }
  update = () => {
    this.setState({
      data: this.state.data + 1
    })
  }
  componentWillReceiveProps(newProps) {
    // console.log(newProps,this.props)

    // let list = this.state.list.slice(0)
    // list.splice(0,3,...(newProps.list))
    this.setState({
      list:newProps.list
    })
  }
  // 性能优化
  shouldComponentUpdate(newProps,newState) {
    // console.log(newProps,newState)

    // if(this.state.data < 3) {
    //   return false
    // }
    // return true
    return true
  }
  componentWillUnmount() {
    // 清理操作
    // 定时器 全局绑定的方法
    clearInterval(this.interval)
  }
  render() {
    const {data} = this.state
    return (
      <>
        <div>{data}</div>
        <Child2></Child2>
        <button onClick={this.update}>add</button>
        <ul>
          {
            this.state.list.map(el => {
              return <li>{el}</li>
            })
          }
        </ul>
      </>
    )
  }
}

export default Child1