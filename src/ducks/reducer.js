import { createReducer } from 'redux-starter-kit'
import initialState from './initialState'

const setSearchfield = (state, action) => {
  const { payload } = action
  const value = payload
  return {
    ...state,
    searchfield: value.toLowerCase()
  }
}

export default createReducer(initialState, {
  setSearchfield
})
