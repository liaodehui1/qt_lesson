import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import Header from '../components/Header';
import routes from '../router'

const App = function() {
  return (
    <>
      <BrowserRouter>
        {/* <Header></Header> */}
        <div>
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    </>
  )
}

// 复用已有的html，负责事件
ReactDom.hydrate(<App/>,document.getElementById('app'))