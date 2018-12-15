import { CHANGE_SEARCHFIELD } from './constants'

export const setSearchfield = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
})
