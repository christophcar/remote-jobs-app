import React, { Component } from 'react'
import styled from 'styled-components'
import undraw from '../img/undraw-new.svg'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  grid-template-rows: 1fr 3fr;
`

const HeadlinesAll = styled.section`
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 15px;

  @media only screen and (min-width: 700px) {
    grid-column: 2 / 3;
  }
`

const Headline = styled.h1`
  font-size: 34px;
  font-weight: 700;
  margin: 0;

  @media only screen and (min-width: 750px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 1050px) {
    font-size: 46px;
  }
`

const Subheadline = styled.h2`
  font-size: 22px;
  font-weight: 300;

  @media only screen and (min-width: 750px) {
    font-size: 28px;
  }

  @media only screen and (min-width: 1050px) {
    font-size: 28px;
  }
`

const Image = styled.img`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  width: 0;

  @media only screen and (min-width: 700px) {
    width: 350px;
    margin-right: 20px;
  }

  @media only screen and (min-width: 950px) {
    width: 550px;
  }

  @media only screen and (min-width: 1200px) {
    width: 700px;
    margin-right: 0;
  }
`

export default class Categories extends Component {
  render() {
    return (
      <Wrapper>
        <HeadlinesAll>
          <Headline data-cy="title">
            Ortsunabhängige Jobs für digitale Talente
          </Headline>
          <Subheadline>
            Auf <u>helloremote.co</u> findest du anspruchsvolle, ortsunabhängige
            Jobs bei innovativen deutschsprachigen Unternehmen.
          </Subheadline>
        </HeadlinesAll>
        <Image data-cy="Heroimage" alt="Icon" src={undraw} />
      </Wrapper>
    )
  }
}
