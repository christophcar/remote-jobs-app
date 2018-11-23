import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
`

const Input = styled.input`
  font-size: 20px;
  width: 400px;
  max-width: 400px;
  height: 60px;
  border: none;
  background: #fff;
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
`

const Button = styled.button`
  color: white;
  font-size: 20px;
  font-weight: 300;
  width: 150px;
  height: 60px;
  margin: 5px;
  background: cornflowerblue;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
`

export default class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  render() {
    const { searchChange } = this.props
    return (
      <Wrapper data-cy="Filter">
        <Input
          data-cy="Todo"
          type="search"
          placeholder="Search for jobs..."
          onChange={searchChange}
        />
        <Button>Filter</Button>
      </Wrapper>
    )
  }
}
