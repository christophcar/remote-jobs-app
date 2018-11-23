import React, { Component } from 'react'
import styled from 'styled-components'

const Headline = styled.h1`
  display: grid;
  font-size: 35px;
  grid-template-rows: 80px;
  justify-content: center;
  align-items: center;
  text-align: center;
`

class Heading extends Component {
  render() {
    return <Headline>Find remote jobs in Germany</Headline>
  }
}

export default Heading
