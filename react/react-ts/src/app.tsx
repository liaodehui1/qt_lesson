import * as React from 'react'
import { Header, About } from './components'

export const App: React.StatelessComponent<{}> = () => {
  return (
    // bootstrap流动式
    <div className="container-fluid">
      <Header></Header>
      <About></About>
    </div>
  )
}