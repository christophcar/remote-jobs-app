import reducer from './reducer'

describe('reducer', () => {
  it('can search for jobs', () => {
    const state = { searchfield: '' }
    const newState = reducer(state, {
      type: 'setSearchfield',
      payload: 'value'
    })
    expect(newState).toEqual({ searchfield: 'value' })
  })
})
