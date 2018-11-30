import React, { Component } from 'react'
import styled from 'styled-components'
import employee from '../img/employee.png'

const Bar = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2fr 1fr 5fr 1fr;
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

const Headline = styled.h1`
  grid-column: 3 / 4;
  font-size: 20px;

  @media only screen and (min-width: 700px) {
    font-size: 38px;
  }
`

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
`

const Image = styled.img`
  width: 55px;

  @media only screen and (min-width: 750px) {
    width: 65px;
  }
`

export default class Navigation extends Component {
  render() {
    return (
      <Bar>
        <Wrapper>
          <Image alt="Button" src={employee} />
        </Wrapper>
        <Headline>Find remote jobs in Germany</Headline>
      </Bar>
    )
  }
}
