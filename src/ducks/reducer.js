import { CHANGE_SEARCHFIELD } from './constants'
import initialState from './initialState'

export const searchJobs = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchfield: action.payload }
    default:
      return state
  }
}
