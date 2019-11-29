import * as CONSTANTS from './constant'
export const seachFocus = (focus) => {
  return {
    type: CONSTANTS.SEARCH_FOCUS,
    focus
  }
}