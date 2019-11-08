import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'
const isLogin = false
// 路由拦截
class PrivateRoter extends Component{
  render() {
    const props = this.props
    return (
      <div>
        {
          isLogin ? <Route {...props}/> : '未登录' 
        }
      </div>
    )
  }
}
function Guanzhu() {
  return (
    <div>关注</div>
  )
}
function fe() {
  return (
    <div>前端</div>
  )
}
function rd() {
  return (
    <div>后端</div>
  )
}
function PriCom() {
  return (
    <div>私密</div>
  )
}
function Home() {
  return (
    <div>
      <div>
        <Link to="/home">首页</Link>
        <Link to="/home/guanzhu">关注</Link>
        <Link to="/home/fe">前端</Link>
        <Link to="/home/rd">后端</Link>
        <Link to="/home/private">私密</Link>
      </div>
      <div className="main">
        <Route path="/home/guanzhu" component={Guanzhu}></Route>
        <Route path="/home/fe" component={fe}></Route>
        <Route path="/home/rd" component={rd}></Route>
        <PrivateRoter path="/home/private" component={PriCom}></PrivateRoter>
      </div>
    </div>
  )
}
function Me() {
  return (
    <div>Me</div>
  )
}
function Search() {
  return (
    <div>Search</div>
  )
}

class Layout extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Route path="/home" component={Home}></Route>
          <Route path="/search" component={Search}></Route>
          {/* 动态路由 */}
          {isLogin && <Route path="/me" component={Me}></Route>}
        </div>
        <div className="footer">
          <Link to="/home">home</Link>
          <Link to="/search">search</Link>
          {isLogin && <Link to="/me">me</Link>}
        </div>
      </div>
    )
  }
}

export default Layout