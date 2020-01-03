import React, { Component } from 'react';
import {
  connect
} from 'react-redux';
import { 
  getCommentList
 } from '../../store/action/homeAction';
import style from './Home.css';
import withStyles from 'isomorphic-style-loader/withStyles';

class Home extends Component {
  // 组件已经挂载
  // 服务端没有全部生命周期
  componentDidMount() {
    this.props.getCommentList();
  }
  render() {
    const { commentList } = this.props;
    return ( 
      <div>
        <h3 className={style.title}>Home</h3>
        {
          commentList.map((comment, i) => {
            return (
            <li key={i}>
              {
              comment.content
              }</li>
            )
          })
        }
      </div>
     );
  }
}
/**
 * 服务端返回的页面需要带有数据
 * 数据需要：dispatch -> 触发
 * 客户端：mapDispatchToProps 交给组件
 * 服务端：把这个dispatch 放在loadData静态属性上
 */
Home.loadData = function(store) {
  // 所有的loadData 都是promise
  return store.dispatch(getCommentList())
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCommentList: () => {
      dispatch(getCommentList())
    }
  }
}
const mapStateToProps = (state) => {
  return {
    commentList: state.home.commentList
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps)(withStyles(style)(Home));