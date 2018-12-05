import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  padding: 15px;
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
        <Wrapper>{title}</Wrapper>
        <Wrapper>{body}</Wrapper>
      </React.Fragment>
    )
  }
}
