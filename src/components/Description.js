import React, { Component } from 'react'

class Description extends Component {
  render() {
    const { description } = this.props
    return <div>{description}</div>
  }
}

export default Description
