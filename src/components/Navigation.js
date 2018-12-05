import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../img/logo-new.png'

const Bar = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  align-items: center;
  box-shadow: 0 1px 3.5px rgba(57, 73, 76, 0.25);
  line-height: 1;
  background: #fff;
`

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 55px;

  @media only screen and (min-width: 750px) {
    width: 250px;
  }
`

const Input = styled.input`
  font-size: 16px;
  width: 200px;
  height: 40px;
  border: none;
  background: #fff;
  padding: 10px;
  margin-right: 8px;
  background: #efefef;
  border-radius: 4px;
`

export default class Navigation extends Component {
  render() {
    return (
      <Bar>
        <Wrapper>
          <Image alt="logo" src={logo} />
        </Wrapper>
        <Input type="search" placeholder="Search latest jobs..." />
      </Bar>
    )
  }
}
