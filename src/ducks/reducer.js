import { CHANGE_SEARCH_FIELD } from './constants'
import initialState from './initialState'

export const setSearchfield = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchfield: action.payload }
    default:
      return state
  }
}

export default createReducer(initialState, {
  setSearchfield
})

// const setSearchfield = (state, action) => {
//   const { payload } = action
//   const value = payload
//   return {
//     ...state,
//     searchfield: value.toLowerCase()
//   }
// }

// export default createReducer(initialState, {
//   setSearchfield
// })
