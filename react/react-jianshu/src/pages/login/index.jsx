import React, { Component } from 'react';
import { connect } from "react-redux";
import { LoginBox, LoginWrapper, Input, Button } from "./style";
import * as actionCreators from "./store/actionCreate";

class Login extends Component {
  userName = React.createRef()
  password = React.createRef()
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" ref={this.userName}></Input>
          <Input placeholder="密码"
            type="password"
            ref={this.password}></Input>
          <Button onClick={() => {
            console.log(this.userName.current.value)
            this.props.login()
          }}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    login() {
      dispatch(actionCreators.changeLoginStatus(true))
    }
  }
}
export default connect(null,mapDispatchToProps)(Login);