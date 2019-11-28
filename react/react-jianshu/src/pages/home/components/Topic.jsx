import React, { Component } from 'react';
import {connect} from 'react-redux'
import BaseComponent from '../../../lib/BaseComponent'
import { TopicWrapper, TopicItem } from "../style";
// Map fromJS({})
// List fromJS([])
class Topic extends BaseComponent {
  state = {}
  render() {
    const {list} = this.props
    return (
      <TopicWrapper color="red">
        {
          list.map((item,i) => {
            return (
              <TopicItem key={i}>
                <img src={item.get('imgUrl')}
                  className="topic-pic"/>
                  {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    );
  }
} 

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home','topicList'])
  }
}

export default connect(mapStateToProps)(Topic);