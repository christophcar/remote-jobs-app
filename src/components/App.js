import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from './HomeContainer'
import Navigation from './Navigation'
import Loading from './Loading'
import SubPage from './SubPage'
import styled from 'styled-components'
import jobs from '../stepstone.json'
import { configureStore } from 'redux-starter-kit'
import reducer from '../ducks/reducer'
import * as Actions from '../ducks/actions'
import { Provider } from 'react-redux'
import SubPageContainer from './SubPageContainer'

const Container = styled.section`
  margin-top: 130px;
`

const store = configureStore({ reducer })

export default class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSearchChange = value => {
    store.dispatch(Actions.setSearchfield(value))
  }

  render() {
    return jobs.length ? (
      <Provider store={store}>
        <Router>
          <Container>
            <Navigation searchChange={this.onSearchChange} />
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
