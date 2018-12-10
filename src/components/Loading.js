import React, { Component } from 'react'
import styled from 'styled-components'

const Loading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`

export default class componentName extends Component {
  render() {
    return <Loading>Loading...</Loading>
  }
}
