import * as React from 'react'
import { Route, HashRouter, Switch} from 'react-router-dom'
import {App} from './app'
import {About} from './components/about'

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    // #
    <HashRouter>
      <div className="containr-fluid">
        <Route component={App}></Route>
        {/* 有且只显示一个匹配的 */}
        <Switch>
          <Route path="/" exact component={About}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </HashRouter>
  )
}