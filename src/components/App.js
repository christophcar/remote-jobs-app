import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Description from './Description'
import { jobs } from '../service'

export default class App extends Component {
  state = {
    savedJobs: jobs || this.load()
  }

  render() {
    this.save()
    return (
      <Router>
        <React.Fragment>
          <Route
            exact
            path="/"
            render={() => <Home jobs={this.state.savedJobs} />}
          />
          <Route
            path="/jobs/:id"
            // The match() method searches a string for a match, and returns the matches, as an Array
            render={({ match }) => (
              <div>
                <Description
                  // set job.id [which is uid()] equal to match.params.id to return array
                  job={this.state.savedJobs.find(
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
