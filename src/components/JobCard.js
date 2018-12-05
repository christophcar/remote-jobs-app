import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const Card = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: 60px 60px;
  align-items: center;
  margin: 15px 10px;
  padding: 10px 0;
  background: white;
  max-width: 1000px;
  height: auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }

  @media only screen and (min-width: 700px) {
    padding: 30px;
    margin: 25px;
  }

  @media only screen and (min-width: 1050px) {
    grid-template-columns: 1fr 4fr 2fr;
    grid-template-rows: 50px 50px;
    margin: 25px auto;
  }
`
const Position = styled.h2`
  font-size: 18px;
  line-height: 1;
  grid-column: 2 / 4;
  margin-left: 15px;
  margin-right: 10px;

  @media only screen and (min-width: 700px) {
    font-size: 23px;
  }

  @media only screen and (min-width: 1050px) {
    grid-column: 2 / 3;
  }
`

const Company = styled.h3`
  font-size: 18px;
  font-weight: 400;
  grid-column: 2 / 3;
  margin-left: 15px;

  @media only screen and (min-width: 700px) {
    font-size: 23px;
  }
`

const Date = styled.p`
  font-size: 18px;
  margin-right: 10px;
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  padding-left: 18px;

  @media only screen and (min-width: 700px) {
    font-size: 20px;
    padding-left: 60px;
  }

  @media only screen and (min-width: 1050px) {
    grid-row: 1 / 3;
  }
`

const Image = styled.img`
  width: 55px;
  height: auto;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  margin-left: 15px;

  @media only screen and (min-width: 700px) {
    width: 80px;
  }
`

export default class JobCard extends Component {
  static propTypes = {
    position: PropTypes.string,
    company: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string
  }

  render() {
    const { company, date, position, image, id } = this.props
    return (
      <Card data-cy="JobCard" to={`/jobs/${id}`}>
        <Image src={image} />
        <Position>{position}</Position>
        <Company>{company}</Company>
        <Date>
          <Moment format="D MMM">{date}</Moment>
          {/* <Moment fromNow>{date}</Moment> */}
        </Date>
      </Card>
    )
  }
}
