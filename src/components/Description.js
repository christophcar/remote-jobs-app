import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.section`
  padding: 15px 350px;
  font-size: 19px;
  font-weight: bold;
`

const Body = styled.section`
  padding: 15px 350px;
  font-size: 19px;
`

export default class Description extends Component {
  static propTypes = {
    description: PropTypes.string
  }

  render() {
    const { title, body } = this.props
    return (
      <React.Fragment>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </React.Fragment>
    )
  }
}
