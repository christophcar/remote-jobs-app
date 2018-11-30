import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 160px 10px 50px 10px;
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
  margin-right: 5px;
  border-radius: 8px;
`

// const Button = styled.button`
//   color: white;
//   font-size: 20px;
//   font-weight: 300;
//   width: 150px;
//   height: 60px;
//   margin-left: 5px;
//   background: cornflowerblue;
//   border-radius: 8px;
//   box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
// `

export default class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  render() {
    const { searchChange } = this.props
    return (
      <Wrapper>
        <Input
          data-cy="Input"
          type="search"
          placeholder="Search for position or company..."
          onChange={event => searchChange(event.target.value)}
        />
        {/* <Button data-cy="FilterButton">Filter</Button> */}
      </Wrapper>
    )
  }
}
