import React from 'react';
import { Link } from 'react-router-dom';
/**
 * { tag: 'div' }
 * 浏览器：react-dom div
 * 服务端：字符串的 html，
 * 同构：
 */
class Header extends React.Component {
  componentWillMount() {
    console.log('component will');
  }
  buy () {
    console.log(1234566);
  }
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        {/* 
        :3000/: home  -> 服务端生成 html
        点击 Login :3000/login: login  ->  js? server? 是 js 把组件生成 html
        刷新当前页面 :3000/login: login ——>  server html
        */}
        382938929090
        <button onClick={this.buy}>buy</button>
      </div>
    )
  }
}

export default Header;