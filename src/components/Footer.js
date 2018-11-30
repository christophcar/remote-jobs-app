import React, { Component } from 'react'
import styled from 'styled-components'
import anchor from '../img/anchor.png'

const Bar = styled.section`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 70px 70px 120px;
  align-items: center;
  box-shadow: 0 1px 3.5px rgba(57, 73, 76, 0.25);
  margin-top: 180px;
  background: #fff;
  bottom: 0;

  @media only screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    grid-template-rows: 55px 55px;
  }
`

const Wrapper = styled.section`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 900px) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    justify-content: center;
  }
`

const Image = styled.img`
  display: flex;
  align-items: center;
  width: 35px;

  @media only screen and (min-width: 900px) {
    width: 55px;
    justify-content: center;
  }
`

const Made = styled.p`
  margin-left: 20px;
`

const Name = styled.h3`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  font-size: 16px;
  margin-bottom: 20px;

  @media only screen and (min-width: 900px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    justify-content: center;
    margin-bottom: -10px;
    font-size: 20px;
  }
`

const Claim = styled.p`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  margin-top: 60px;
  font-style: italic;
  color: cornflowerblue;

  @media only screen and (min-width: 900px) {
    justify-content: center;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    margin-top: -10px;
  }
`

const Adress = styled.p`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  font-size: 16px;
  margin: 0;

  @media only screen and (min-width: 900px) {
    grid-column: 4 / 5;
    grid-row: 1 / 3;
    font-size: 16px;
    margin-left: 20px;
  }
`

const Link = styled.a``

export default class Navigation extends Component {
  render() {
    return (
      <Bar>
        <Wrapper>
          <Image alt="Button" src={anchor} />
          <Made>Proudly produced in Hamburg</Made>
        </Wrapper>
        <Name>getremote.io</Name>
        <Claim>Find remote jobs in Germany</Claim>
        <Adress>
          Christoph Carstens <br />
          Lerchenstraße 17 <br />
          22767 Hamburg <br />
          <Link href="http://www.christophcarstens.de">Who's this guy?</Link>
        </Adress>
      </Bar>
    )
  }
}
