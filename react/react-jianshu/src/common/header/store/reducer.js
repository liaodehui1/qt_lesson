import * as CONSTANTS from './constant'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focus:false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case CONSTANTS.SEARCH_FOCUS:
      return state.set('focus',true)
    default:
      return defaultState
  }
}