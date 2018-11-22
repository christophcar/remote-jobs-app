import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Description from './Description'
import { jobs } from '../service'
import styled from 'styled-components'
// import scrape from './scraper'

const Loading = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 32px;
`

export default class App extends Component {
  state = {
    jobs: jobs,
    searchfield: '',
    jobtags: ''
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(remotejobs => this.setState({ jobs: remotejobs }))
  // }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value })
  }

  onClickChange = event => {
    console.log(event.target.value)
    this.setState({ jobtags: event.target.value })
  }

  render() {
    const filteredJobs = this.state.jobs.filter(job => {
      return (
        job.position
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        job.company
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        job.jobtags.toLowerCase().includes(this.state.jobtags.toLowerCase())
      )
    })

    // this.save()

    if (this.state.jobs.length === 0) {
      return <Loading>Loading...</Loading>
    } else {
      return (
        <Router>
          <React.Fragment>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  jobs={filteredJobs}
                  searchChange={this.onSearchChange}
                  clickChange={this.onClickChange}
                />
              )}
            />
            <Route
              path="/jobs/:id"
              // The match() method searches a string for a match, and returns the matches, as an Array
              render={({ match }) => (
                <div>
                  <Description
                    // set job.id [which is uid()] equal to match.params.id to return array
                    job={this.state.jobs.find(
                      job => job.id === match.params.id
                    )}
                  />
                </div>
              )}
            />
          </React.Fragment>
        </Router>
      )
    }
  }

  // save() {
  //   localStorage.setItem('remote-jobs', JSON.stringify(jobs))
  // }

  // load() {
  //   try {
  //     return JSON.parse(localStorage.getItem('remote-jobs')) || []
  //   } catch (err) {
  //     return []
  //   }
  // }
}
