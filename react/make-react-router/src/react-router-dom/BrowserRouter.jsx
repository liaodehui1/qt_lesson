import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from './index';

class BrowserRouter extends Component {
  // 路由的信息 {location, listen, push, go}
  // h5 history api
  constructor (props) {
    super(props)
    this.history = createBrowserHistory()
  }
  render() {
    return (
      <Router history={this.history}
        {...this.props}></Router>
    )
  }
}

export default BrowserRouter;