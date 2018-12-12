import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from 'redux-starter-kit'
import HomeContainer from './HomeContainer'
import NavigationContainer from './NavigationContainer'
import Loading from './Loading'
import SubPageContainer from './SubPageContainer'
import styled from 'styled-components'
import jobs from '../stepstone.json'
import reducer from '../ducks/reducer'

const Container = styled.section`
  margin-top: 130px;
`

const store = configureStore({ reducer })

export default class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

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
