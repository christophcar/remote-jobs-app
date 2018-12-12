import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import Loading from './Loading'
import SubPage from './SubPage'
import styled from 'styled-components'
import jobs from '../stepstone.json'
import { configureStore } from 'redux-starter-kit'
import reducer from '../ducks/reducer'
import * as Actions from '../ducks/actions'

const Container = styled.section`
  margin-top: 130px;
`

const store = configureStore({ reducer })

export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
    window.scrollTo(0, 0)
  }

  onSearchChange = value => {
    store.dispatch(Actions.setSearchfield(value))
  }

  render() {
    const state = store.getState()

    const filteredJobs = state.jobs.filter(job => {
      return (
        job.position.toLowerCase().includes(state.searchfield.toLowerCase()) ||
        job.company.toLowerCase().includes(state.searchfield)
      )
    })

    return jobs.length ? (
      <Router>
        <Container>
          <Navigation searchChange={this.onSearchChange} />
          <Route
            exact
            path="/"
            render={() => (
              <Home jobs={filteredJobs} searchChange={this.onSearchChange} />
            )}
          />
          <Route
            path="/jobs/:id"
            render={({ match }) => {
              const filtered = state.jobs.find(
                job => job.id === match.params.id
              )
              return <SubPage filtered={filtered} />
            }}
          />
        </Container>
      </Router>
    ) : (
      <Loading />
    )
  }
}
