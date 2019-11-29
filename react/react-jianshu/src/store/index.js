import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux-immutable'
import homeReducer from '../pages/home/store/reducer'
import headerReducer from '../common/header/store/reducer'
import loginReducer from '../pages/login/store/reducer'

// 类vuex modules
const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  login: loginReducer
})

// 使用插件为了dispatch接收函数
const store = createStore(reducer,applyMiddleware(thunk))

export default store