import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import undraw from '../img/undraw-new.svg'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  grid-template-rows: 1fr 3fr;
`

const HeadlinesAll = styled.section`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Headline = styled.h1`
  font-size: 46px;
  font-weight: 700;
  margin: 0;
`

const Subheadline = styled.h2`
  font-size: 28px;
  font-weight: 300;
`

const Image = styled.img`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  width: 700px;
  height: auto;
`

export default class Categories extends Component {
  static propTypes = {
    clickChange: PropTypes.func
  }

  render() {
    return (
      <Wrapper>
        <HeadlinesAll>
          <Headline>Finde Jobs an den ungewöhnlichsten Orten</Headline>
          <Subheadline>
            Auf <u>helloremote.co</u> findest du anspruchsvolle, ortsunabhängige
            Jobs bei innovativen deutschsprachigen Unternehmen.
          </Subheadline>
        </HeadlinesAll>
        <Image alt="Icon" src={undraw} />
      </Wrapper>
    )
  }
}
