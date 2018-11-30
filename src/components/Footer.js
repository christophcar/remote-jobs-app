import React, { Component } from 'react'
import styled from 'styled-components'
import anchor from '../img/anchor.png'

const Bar = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  grid-template-rows: 55px 55px;
  align-items: center;
  margin-top: 200px;
  box-shadow: 0 1px 3.5px rgba(57, 73, 76, 0.25);
  background: #fff;
`

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
`

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;

  @media only screen and (min-width: 700px) {
    width: 55px;
  }
`

const Made = styled.p`
  margin-left: 20px;
`

const Name = styled.h3`
  display: flex;
  justify-content: center;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  margin-bottom: -10px;
`

const Claim = styled.p`
  display: flex;
  justify-content: center;
  font-style: italic;
  color: cornflowerblue;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  margin-top: -10px;
`

const Adress = styled.p`
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  font-size: 16px;
  margin-left: 20px;
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
