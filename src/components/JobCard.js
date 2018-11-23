import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = styled(Link)`
  display: grid;
  grid-template-columns: 3fr auto 1fr;
  grid-template-rows: 45px 45px;
  align-items: center;
  margin: 25px auto;
  padding: 25px;
  background: white;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  text-decoration: none;
  color: inherit;
`
const Position = styled.h2`
  font-size: 22px;
  grid-column: 1 / 2;
  line-height: 1;
`

const Company = styled.h3`
  font-size: 23px;
  font-weight: 400;
  grid-column: 1 / 2;
`

const Date = styled.p`
  font-size: 20px;
  grid-row: 1 / 3;
  grid-column: 2 / 3;
`

export default class JobCard extends Component {
  static propTypes = {
    position: PropTypes.string,
    company: PropTypes.string,
    date: PropTypes.number,
    id: PropTypes.number
  }

  render() {
    const { position, company, date, id } = this.props
    return (
      <Card to={`/jobs/${id}`}>
        <Position>{position}</Position>
        <Company>{company}</Company>
        <Date>Number: {date}</Date>
      </Card>
    )
  }
}
