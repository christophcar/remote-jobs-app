import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Description from './Description'
import { jobs } from '../service'

export default class App extends Component {
  state = {
    jobs: jobs,
    searchfield: ''
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredJobs = this.state.jobs.filter(job => {
      return (
        job.position
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        job.company.toLowerCase().includes(this.state.searchfield.toLowerCase())
      )
    })
    this.save()
    return (
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
            // The match() method searches a string for a match, and returns the matches, as an Array
            render={({ match }) => (
              <div>
                <Description
                  // set job.id [which is uid()] equal to match.params.id to return array
                  job={this.state.jobs.find(job => job.id === match.params.id)}
                />
              </div>
            )}
          />
        </React.Fragment>
      </Router>
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
