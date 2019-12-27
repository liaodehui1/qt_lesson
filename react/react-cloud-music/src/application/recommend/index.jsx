import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Scroll from '../../components/scroll/index';
import Slider from './Slider';
import * as actionTypes from './store/actionCreators';

function RecommendComponent(props) {
  const { bannerList, recommendList } = props;
  const bannerListJS = bannerList ? bannerList.toJS() : [];
  useEffect(() => {
    if (!bannerList.size) {
      props.getBannerDataDispatch();
    }
    if (!recommendList.size) {
      props.getRecommendListDataDispatch();
    }
    return () => {
      // unMount
    }
  }, []) // 对比数组前后两次，不一样才执行，[]只在DidMount执行
  return (
    <Scroll>
      <div>
        <Slider bannerList={bannerListJS} />
      </div>
    </Scroll>
  )
}

const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  // songsCount: state.getIn(['player', 'playList']).size,
  enterLoading: state.getIn(['recommend', 'enterLoading'])
});

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(RecommendComponent));