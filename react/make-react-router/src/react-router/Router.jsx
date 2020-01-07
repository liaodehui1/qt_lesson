import React, { Component } from 'react';
import Context from './Context';

class Router extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: props.history.location
    }
    props.history.listen(newLocation => {
      this.setState({
        location: newLocation
      })
    })
  }
  render() {
    const { history } = this.props
    return (
      <Context.Provider 
        value={{history}}
        {...this.props} />
    )
  }
}

export default Router;