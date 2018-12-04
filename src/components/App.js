import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Description from './Description'
import styled from 'styled-components'
import jobs from '../stepstone.json'

const Loading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`

export default class App extends Component {
  state = {
    jobs: jobs,
    searchfield: ''
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(remotejobs => this.setState({ jobs: remotejobs }))
  // }

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
        <React.Fragment>
          <Route
            exact
            path="/"
            render={() => (
              <Home jobs={filteredJobs} searchChange={this.onSearchChange} />
            )}
          />
          <Route
            path="/jobs/:id"
            render={({ match }) => (
              <Description
                title={
                  this.state.jobs.find(job => job.id === match.params.id)
                    .details[0].title
                }
                body={
                  this.state.jobs.find(job => job.id === match.params.id)
                    .details[0].body
                }
              />
            )}
          />
        </React.Fragment>
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
