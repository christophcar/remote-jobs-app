describe('reducer', () => {
  it('can search for jobs', () => {
    const state = { searchfield: '' }
    const newState = { ...state, searchfield: 'value' }
    expect(newState).toEqual({ searchfield: 'value' })
  })
})
