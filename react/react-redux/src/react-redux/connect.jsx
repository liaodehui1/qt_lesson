import React from 'react';
import { Consumer } from './index';

export default (mapStateToProps, mapDispatchToProps) => {
  return (Component) => {
    return class Wrap extends React.Component {
      render() {
        return (
          <Consumer>
            {
              (store) => {
                const state = store.getState()
                const dispatch = store.dispatch
                const stateToProps = mapStateToProps(state)
                const dispatchToProps = mapDispatchToProps(dispatch)
                return (
                  <Component {...stateToProps} {...dispatchToProps} />
                )
              }
            }
          </Consumer>
        )
      }
    }
  }
}