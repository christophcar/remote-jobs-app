module.exports = {
  babel: {
    plugins: [
      'babel-plugin-styled-components',
      'babel-plugin-jsx-remove-data-test-id',
      {
        attributes: 'data-cy'
      }
    ]
  }
}
