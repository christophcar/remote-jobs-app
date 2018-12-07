import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'

const Bar = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  grid-template-rows: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  align-items: center;
  box-shadow: 0 1px 3.5px rgba(57, 73, 76, 0.25);
  line-height: 1;
  background: #fff;
`

const Logo = styled.img`
  grid-column: 2 / 3;
  width: 55px;

  @media only screen and (min-width: 750px) {
    width: 230px;
  }
`

const Input = styled.input`
  font-size: 16px;
  width: 500px;
  height: 40px;
  border: none;
  background: #fff;
  padding: 10px;
  margin-right: 8px;
  background: #efefef;
  border-radius: 4px;
  outline: none;
`

export default class Navigation extends Component {
  render() {
    const { searchChange } = this.props
    return (
      <Bar>
        <Logo alt="logo" src={logo} />

        <Input
          type="search"
          placeholder="Suche nach Jobs..."
          onChange={event => searchChange(event.target.value)}
        />
      </Bar>
    )
  }
}
