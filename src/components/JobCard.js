import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

const Card = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  grid-template-rows: 45px 45px;
  align-items: center;
  margin: 25px auto;
  padding: 30px;
  background: white;
  max-width: 1000px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  text-decoration: none;
  color: inherit;
`
const Position = styled.h2`
  font-size: 22px;
  line-height: 1;
  grid-column: 2 / 3;
  margin-left: 15px;
`

const Company = styled.h3`
  font-size: 23px;
  font-weight: 400;
  grid-column: 2 / 3;
  margin-left: 15px;
`

const Date = styled.p`
  font-size: 20px;
  margin-right: 10px;
  grid-row: 1 / 3;
  grid-column: 3 / 4;
  padding-left: 60px;
`

const Image = styled.img`
  width: 80px;
  height: auto;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  margin-left: 15px;
`

export default class JobCard extends Component {
  static propTypes = {
    position: PropTypes.string,
    company: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number
  }

  render() {
    const { company, date, position, image, id } = this.props
    return (
      <Router>
        <Card to={`/jobs/${id}`}>
          <Image src={image} />
          <Position>{position}</Position>
          <Company>{company}</Company>
          <Date>{date}</Date>
        </Card>
      </Router>
    )
  }
}
