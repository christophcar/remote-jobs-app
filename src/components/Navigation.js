import React, { Component } from 'react'
import styled from 'styled-components'
import employee from '../img/employee.png'

const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  box-shadow: 0 1px 3.5px rgba(57, 73, 76, 0.25);
  background: #fff;
`

const Headline = styled.h1`
  display: grid;
  font-size: 35px;
  grid-template-rows: 80px;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Image = styled.img`
  width: 60px;
  height: auto;
  margin-right: 35px;
`

export default class Navigation extends Component {
  render() {
    return (
      <Bar>
        <Image alt="Button" src={employee} />
        <Headline>Find remote jobs in Germany</Headline>
      </Bar>
    )
  }
}
