import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import BaseComponent from './lib/BaseComponent'
import store from './store/index'
import Home from './pages/home/index'
import Header from './common/header/index'
import {GlobalStyle} from './statics/iconfont/iconfont'

class App extends BaseComponent {
  render() {
    return (
      <Provider store={store}>
        {/* BrowserRouter 保存了全局的路由信息 */}
        <BrowserRouter>
          <div>
            <GlobalStyle></GlobalStyle>
            <Header></Header>
            <Route exact path="/" component={Home}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
