import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSearchfield } from '../ducks/actions'
import HomeContainer from './HomeContainer'
import NavigationContainer from './NavigationContainer'
import Loading from '../components/Loading'
import SubPageContainer from './SubPageContainer'
import styled from 'styled-components'
import jobs from '../stepstone.json'

const Container = styled.section`
  margin-top: 130px;
`

const mapStateToProps = state => {
  return {
    searchfield: state.searchfield
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchfield(event.target.value))
  }
}

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return jobs.length ? (
      <Router>
        <Container>
          <NavigationContainer />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/jobs/:id" component={SubPageContainer} />
        </Container>
      </Router>
    ) : (
      <Loading />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
