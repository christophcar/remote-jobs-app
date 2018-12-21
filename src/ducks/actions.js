import { CHANGE_SEARCHFIELD } from './constants'

export const setSearchfield = value => ({
  type: CHANGE_SEARCHFIELD,
  payload: value
})
