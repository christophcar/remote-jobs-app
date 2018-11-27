import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import computer from '../img/computer.png'
import networking from '../img/networking.png'
import pieChart from '../img/pie-chart.png'
import layers from '../img/layers.png'
import handshake from '../img/handshake.png'
import support from '../img/support.png'

const Wrapper = styled.section`
  display: grid;
  grid-gap: 30px;
  margin: 50px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 100px;
  justify-content: center;

  @media only screen and (min-width: 900px) {
    display: grid;
    grid-gap: 30px;
    margin: 50px;
    grid-template-columns: repeat(3, minmax(200px, 300px));
    grid-auto-rows: 100px 100px;
    justify-content: center;
  }
`

const Box = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  font-size: 20px;
  background: rgb(244, 247, 252);
`

const Image = styled.img`
  width: 30px;
  height: auto;
  margin-right: 10px;
`

export default class Categories extends Component {
  static propTypes = {
    clickChange: PropTypes.func
  }

  render() {
    const { searchChange } = this.props
    return (
      <Wrapper>
        <Box
          data-cy="CategoryButton1"
          data-cy="CategoryButton"
          onClick={() => searchChange('Frontend')}
        >
          <Image alt="Icon" src={computer} />
          Frontend
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Backend')}>
          <Image alt="Icon" src={networking} />
          Backend
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Marketing')}>
          <Image alt="Icon" src={pieChart} />
          Marketing
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Design')}>
          <Image alt="Icon" src={layers} />
          Design
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Sales')}>
          <Image alt="Icon" src={handshake} />
          Sales
        </Box>
        <Box data-cy="CategoryButton" onClick={() => searchChange('Support')}>
          <Image alt="Icon" src={support} />
          Support
        </Box>
      </Wrapper>
    )
  }
}
