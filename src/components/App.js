import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Description from './Description'
import { jobs } from '../service'

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" render={() => <Home jobs={jobs} />} />
          <Route
            path="/jobs/:id"
            // The match() method searches a string for a match, and returns the matches, as an Array
            render={({ match }) => (
              <div>
                <Description
                  // set job.id [which is uid()] equal to match.params.id to return array
                  job={jobs.find(job => job.id === match.params.id)}
                />
              </div>
            )}
          />
        </React.Fragment>
      </Router>
    )
  }
}
