import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ListItem, ListInfo, LoadMore } from "../style";
import * as actionCreators from '../store/actionCreate';
class List extends Component {
  state = {}
  render() {
    const {list, page} = this.props
    return (
      <div>
        {
          list.map((item, i) => {
            return (
              <Link to={"/detail/" + item.get('id')} key={i}>
                <ListItem>
                <img alt='' className='pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className="title">
                      {item.get('title')}
                    </h3>
                    <p className="desc">
                      {item.get('desc')}
                    </p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => {
          this.props.getMoreList(page)
        }}>
          更多文字
        </LoadMore>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage'])
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);