import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  display: grid;
  grid-gap: 10px;
  margin: 80px 80px 40px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  justify-content: center;

  @media only screen and (min-width: 700px) {
    grid-gap: 15px;
    grid-template-columns: repeat(6, minmax(154px, 154px));
    grid-auto-rows: 50px 50px;
  }
`

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  color: #999;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  font-size: 16px;
  font-weight: 700;
  border: 2px solid rgb(74, 165, 234);
  border-radius: 3px;
  background: white;

  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`

export default class Categories extends Component {
  static propTypes = {
    clickChange: PropTypes.func
  }

  render() {
    const { searchChange } = this.props
    return (
      <Wrapper>
        <Text>Suche nach:</Text>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Frontend')}>
          Frontend
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Backend')}>
          Backend
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Marketing')}>
          Marketing
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Design')}>
          Design
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Sales')}>
          Sales
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Support')}>
          Support
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Support')}>
          Support
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Support')}>
          Support
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Support')}>
          Support
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Support')}>
          Support
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Support')}>
          Support
        </Box>
      </Wrapper>
    )
  }
}
