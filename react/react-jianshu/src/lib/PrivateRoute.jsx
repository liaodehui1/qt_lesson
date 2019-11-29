import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
{/* <PrivateRoute path="/write" component={}></PrivateRoute> */}

class PrivateRoute extends Component {
  render() {
    // 判断是否登录
    const { login, children, ...restProps} = this.props
    console.log(login)
    return (
      <Route {...restProps} render={() => {
        return login ? children :  <Redirect to="/" />
      }}></Route>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.getIn(['login','login'])
  }
}
export default connect(mapStateToProps)(PrivateRoute);