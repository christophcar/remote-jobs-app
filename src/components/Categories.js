import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  display: grid;
  grid-gap: 10px;
  margin: 50px 80px 40px;
  grid-template-columns: repeat(2, minmax(145px, 250px));
  grid-auto-rows: 80px;
  justify-content: center;
  text-align: center;

  @media only screen and (min-width: 750px) {
    grid-gap: 15px;
    grid-template-columns: repeat(3, minmax(200px, 300px));
    grid-auto-rows: 50px;
  }

  @media only screen and (min-width: 1050px) {
    grid-template-columns: repeat(6, 154px);
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

const Box = styled.button`
  font-family: nunito;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-shadow: 0 5px 5px rgba(17, 16, 62, 0.1);
  font-size: 16px;
  font-weight: 700;
  border: 2px solid rgb(74, 165, 234);
  border-radius: 3px;
  background: white;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 5px rgba(17, 16, 62, 0.15);
  }

  &:focus {
    background: rgb(74, 165, 234);
    color: white;
    outline: none;
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
        <Text>Häufig gesucht:</Text>
        <Box data-cy="CategoryButton" onClick={() => searchChange('')}>
          Alle Jobs
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Frontend')}>
          Frontend
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Backend')}>
          Backend
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Fullstack')}>
          Fullstack
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Java')}>
          Java
        </Box>
        <Box
          data-cy="CategoryButton"
          onClick={() => searchChange('JavaScript')}
        >
          JavaScript
        </Box>
        <Box
          data-cy="CategoryButton"
          onClick={() => searchChange('Administrator')}
        >
          Administrator
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('DevOps')}>
          DevOps
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Scrum')}>
          Scrum
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Mobile')}>
          Mobile
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('React')}>
          React
        </Box>
      </Wrapper>
    )
  }
}
