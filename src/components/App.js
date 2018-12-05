import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import Description from './Description'
import styled from 'styled-components'
import jobs from '../stepstone.json'

const Loading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`

const Container = styled.section`
  margin-top: 160px;
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
          <Navigation />

          <Route
            exact
            path="/"
            render={() => (
              <Home jobs={filteredJobs} searchChange={this.onSearchChange} />
            )}
          />
          <Route
            path="/jobs/:id"
            render={({ match }) =>
              this.state.jobs
                .find(job => job.id === match.params.id)
                .details.map(description => (
                  <Description
                    title={description.title}
                    body={description.body}
                  />
                ))
            }
          />
        </Container>
      </Router>
    ) : (
      <Loading>Loading...</Loading>
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
