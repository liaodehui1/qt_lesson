import React, { Component } from 'react';
import Context from './Context';
import { pathToRegexp } from 'path-to-regexp';

class Route extends Component {
  constructor(props) {
    super(props)
  }
  matchPath = (pathName, option) => {
    const {
      path,
      exact = false, // 精准匹配
      sensitive = false,
      strict = false
    } = option

    // let reg = PathToReg('/user/:id', keys, { end: false })

    // // end = false 不必须结束
    // console.log(reg.test('/user')) // true
    // console.log(reg.test('/user/1')) // true

    // // end = true 必须结束
    // let reg = PathToReg('/user', keys, { end: true })
    // console.log(reg.test('/user')) // true
    // console.log(reg.test('/user/1')) // false

    const regexp = pathToRegexp(path, [], {
      end: exact, sensitive, strict
    })
    const match = regexp.exec(pathName)
    return match
  }
  // location -> path -> component
  render() {
    const { } = this.props
    return (
      <Context.Consumer>
        {
          (context) => {
            const location = context.history.location
            const match = this.matchPath(location.pathname, this.props)
            return (
              <>
                {match && this.props.children}
              </>
            )
          }
        }
      </Context.Consumer>
    )
  }
}

export default Route;