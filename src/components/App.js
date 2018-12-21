import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { searchJobs } from '../ducks/reducer'
import { createStore } from 'redux'
import { setSearchfield } from '../ducks/actions'
import HomeContainer from './HomeContainer'
import NavigationContainer from './NavigationContainer'
import Loading from './Loading'
import SubPageContainer from './SubPageContainer'
import styled from 'styled-components'
import jobs from '../stepstone.json'

const Container = styled.section`
  margin-top: 130px;
`
// redux offers this createStore() function
// basically this creates the store that holds the complete state of my app
const store = createStore(searchJobs)

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

  // we put the store into the provider component (from Redux) which makes the store available
  // to all container components without passing it down from component to component
  render() {
    return jobs.length ? (
      <Provider store={store}>
        <Router>
          <Container>
            <NavigationContainer />
            <Route exact path="/" component={HomeContainer} />
            <Route path="/jobs/:id" component={SubPageContainer} />
          </Container>
        </Router>
      </Provider>
    ) : (
      <Loading />
    )
  }
}

// this tells the component App.js that any time something changes to the state it shall listen to it
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
