import React, { Component } from 'react'
// import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Description from './Description'

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/description" render={() => <Description />} />
        </React.Fragment>
      </Router>
    )
  }
}
