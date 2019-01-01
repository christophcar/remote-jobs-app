import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 50px 10px;
`

const Input = styled.input.attrs({
  shouldComponentUpdate: () => {
    return false
  }
})`
  font-size: 20px;
  width: 500px;
  height: 70px;
  border: 1px solid gray;
  background: #fff;
  padding: 10px;
  margin-right: 8px;
`

export default class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  render() {
    const { searchChange } = this.props
    return (
      <Wrapper>
        <Input
          type="search"
          placeholder="Search for position or company..."
          onChange={event => searchChange(event.target.value)}
        />
      </Wrapper>
    )
  }
}
