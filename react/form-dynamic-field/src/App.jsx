import React from 'react';
import './App.css';

class DynamicField extends React.Component {
  handleAdd = () => {
    this.props.onAdd()
  }
  handleSub = (i) => {
    this.props.onSub(i)
  }

  render() {
    const { rule } = this.props
    return (
      <>
        <label>
          规则
        </label>
        {
          rule.map((preRule, i) => {
            return (
              <div key={i}>
                <label>
                  姓名
                </label>
                {/* 受控组件 */}
                <input type="text"
                  value={preRule.name}
                  data-key="name"
                  data-index={i}
                  onChange={(event) => {
                    this.props.onFieldChange(event)
                  }}></input>
                <label>
                  年龄
                </label>
                <input type="text"
                  value={preRule.age}
                  data-key="age"
                  data-index={i}
                  onChange={this.props.onFieldChange}></input>
                <button onClick={this.handleSub.bind(this,i)}>-</button>
              </div>
            )
          })
        }
        <br></br>
        <button onClick={this.handleAdd}>+</button>
      </>
    )
  }
}
class App extends React.Component {
  state = {
    date: '',
    rule: [
      { name: '', age: '' }
    ]
  }
  handleAdd = () => {
    let rule = this.state.rule.slice(0)
    rule.push({ name: '', age: '' })
    this.setState({
      rule
    })
  }
  handleSub = (i) => {
    console.log(i)
    let rule = this.state.rule.slice(0)
    rule.splice(i,1)
    this.setState({
      rule
    })
  }
  handleChange = (event) => {
    const key = event.target.dataset.key
    const index = event.target.dataset.index
    const value = event.target.value
    let rule = this.state.rule.slice(0)
    rule[parseInt(index)][key] = value
    console.log(rule)
    this.setState({
      rule
    })
  }
  render() {
    const { rule } = this.state
    return (
      <div>
        <label htmlFor="date">
          日期
        </label>
        <input type="date" id="date"></input>
        <br></br>
        <DynamicField 
          rule={rule} 
          onAdd={this.handleAdd}
          onSub={this.handleSub}
          onFieldChange={this.handleChange}></DynamicField>
      </div>
    )
  }
}
export default App;
