import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.section`
  padding: 10px 30px;
  font-size: 19px;
  font-weight: bold;

  @media only screen and (min-width: 500px) {
    padding: 15px 50px;
  }

  @media only screen and (min-width: 1050px) {
    padding: 15px 150px;
  }

  @media only screen and (min-width: 1250px) {
    padding: 15px 350px;
  }
`

const Body = styled.section`
  padding: 10px 30px;
  font-size: 19px;

  @media only screen and (min-width: 500px) {
    padding: 15px 50px;
  }

  @media only screen and (min-width: 1050px) {
    padding: 15px 150px;
  }

  @media only screen and (min-width: 1250px) {
    padding: 15px 350px;
  }
`

const Link = styled.section`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
`

const Logo = styled.section``

export default class Description extends Component {
  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    link: PropTypes.object,
    image: PropTypes.string
  }

  render() {
    const { title, body, link, image } = this.props
    return (
      <React.Fragment>
        <Title data-cy="Descriptions">{title}</Title>
        <Logo>{image}</Logo>
        <Body>{body}</Body>
        <Link data-cy="Apply">{link}</Link>
      </React.Fragment>
    )
  }
}
