import React, { Component } from 'react';
import {is} from 'immutable'

// css in js 样式定义组件 css变量和js变量共享
class BaseComponent extends Component {
  shouldComponentUpdate(nextProps,nextState) {
    const thisProps = this.props || {}
    if(Object.keys(thisProps).length !== Object.keys(nextProps).length) {
      return true
    }
    for(const key in nextProps) {
      if(!is(thisProps[key],nextProps[key])) {
        console.log(`更新${key}`,thisProps[key],nextProps[key])
        return true
      }
    }
    console.log('不更新')
    return false
  }
}


export default BaseComponent;