import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Description from './Description'
import Particles from 'react-particles-js'
// import { jobs } from '../service'
import styled from 'styled-components'
import jobs from '../stepstone.json'
// import scrape from './scraper'

const Loading = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 32px;
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export default class App extends Component {
  state = {
    jobs: jobs,
    searchfield: ''
    // jobtags: ''
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(remotejobs => this.setState({ jobs: remotejobs }))
  // }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value })
  }

  // onClickChange = event => {
  //   this.setState({ jobtags: event.target.value })
  // }

  render() {
    const filteredJobs = this.state.jobs.filter(job => {
      return (
        job.position
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        job.company.toLowerCase().includes(this.state.searchfield.toLowerCase())
        // job.date.toLowerCase().includes(this.state.jobtags.toLowerCase())
      )
    })

    // this.save()

    // if (this.state.jobs.length === 0) {
    //   return <Loading>Loading...</Loading>
    // } else {

    return !jobs.length ? (
      <Loading>Loading...</Loading>
    ) : (
      <Router>
        <React.Fragment>
          <Wrapper>
            <Particles
              style={{
                width: '100vw'
              }}
              params={{
                particles: {
                  number: {
                    value: 50
                  },
                  size: {
                    value: 1
                  }
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'repulse'
                    }
                  }
                }
              }}
            />
          </Wrapper>
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
                  description={
                    this.state.jobs.find(job => job.id === match.params.id)
                      .description
                  }
                />
              </div>
            )}
          />
        </React.Fragment>
      </Router>
    )
  }
  // }

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
