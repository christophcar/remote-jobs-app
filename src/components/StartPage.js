import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import undraw from '../img/undraw.svg'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 5fr;
`

const Headline = styled.h1`
  grid-column: 1 / 2;
`

const Image = styled.img`
  grid-column: 2 / 3;
  width: 700px;
  height: auto;
  margin-right: 10px;
`

export default class Categories extends Component {
  static propTypes = {
    clickChange: PropTypes.func
  }

  render() {
    return (
      <Wrapper>
        <Headline>Hello World</Headline>
        <Image alt="Icon" src={undraw} />
      </Wrapper>
    )
  }
}
