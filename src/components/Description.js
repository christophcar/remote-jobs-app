import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin: 20px 50px;
  padding: 25px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
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
