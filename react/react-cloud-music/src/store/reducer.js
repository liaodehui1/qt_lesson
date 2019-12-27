import { combineReducers } from 'redux-immutable'; // immutable 结构对象
// import { combineReducers } from 'redux';  // { recommend: {} }
import { reducer as recommendReducer} from '../application/recommend/store/index';

export default combineReducers({
  recommend: recommendReducer
})