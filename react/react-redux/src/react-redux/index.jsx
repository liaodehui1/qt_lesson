import React, { createContext } from 'react';

const Context = createContext();

export class Provider extends React.Component {
  constructor (props) {
    console.log('Provider')
    super(props)
    this.state = {
      state: props.store.getState(),
      getState: props.store.getState,
      dispatch: props.store.dispatch
    }
    // 订阅store的state改变
    props.store.subscribe(() =>  {
      this.setState({
        state: props.store.getState()
      })
    })
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer