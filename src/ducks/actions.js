import { CHANGE_SEARCH_FIELD } from './constants'

export const setSearchfield = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})
