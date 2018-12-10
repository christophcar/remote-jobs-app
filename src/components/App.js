import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import Loading from './Loading'
import SubPage from './SubPage'
import styled from 'styled-components'
import jobs from '../stepstone.json'

const Container = styled.section`
  margin-top: 130px;
`

export default class App extends Component {
  state = {
    jobs: jobs,
    searchfield: ''
  }

  onSearchChange = value => {
    this.setState({ searchfield: value.toLowerCase() })
  }

  render() {
    const filteredJobs = this.state.jobs.filter(job => {
      return (
        job.position
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        job.company.toLowerCase().includes(this.state.searchfield)
      )
    })

    this.save()

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
              const filteredJobs = this.state.jobs.find(
                job => job.id === match.params.id
              )
              return <SubPage filteredJobs={filteredJobs} />
            }}
          />
        </Container>
      </Router>
    ) : (
      <Loading />
    )
  }

  save() {
    localStorage.setItem('remote-jobs', JSON.stringify(jobs))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('remote-jobs')) || []
    } catch (err) {
      return []
    }
  }
}
