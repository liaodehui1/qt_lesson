import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';
import Header from '../components/Header';
import routes from '../routers';
import { getClientStore } from '../store/index';

const App = function() {
  return (
    <Provider store={getClientStore()}>
    <BrowserRouter>
      {/* <Route path/> */}
      {/* <Header /> */}
      <div>
        { renderRoutes(routes) }
      </div>
    </BrowserRouter>
    </Provider>
  )
}

{/* <div id="app"></div> */}
// 复用 已有的 html，负责事件

ReactDom.hydrate(<App />, 
  document.getElementById('app'));