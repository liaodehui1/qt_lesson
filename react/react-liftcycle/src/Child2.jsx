import React,{Component} from 'react'

class Child2 extends Component {
  componentWillMount() {
    console.log('componentWillMount2')
  }
  componentDidMount() {
    console.log('componentDidMount2')
  }
  render() {
    return (
      <div>Child2</div>
    )
  }
}

export default Child2