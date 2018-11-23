import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Description from './Description'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import jobs from '../stepstone.json'
// import { jobs } from '../service'

const Loading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* bottom: 0; */
  z-index: -1;
`

const particlesOptions = {
  particles: {
    number: {
      value: 200
    },
    size: {
      value: 2
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
}

export default class App extends Component {
  state = {
    jobs: jobs,
    searchfield: ''
    // category: ''
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
    this.setState({ category: event.target.value })
  }

  render() {
    const filteredJobs = this.state.jobs.filter(job => {
      return (
        job.position
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        job.company.toLowerCase().includes(this.state.searchfield.toLowerCase())
        // job.position.toLowerCase().includes(this.state.category.toLowerCase())
      )
    })

    // this.save()

    return !jobs.length ? (
      <Loading>Loading...</Loading>
    ) : (
      <Router>
        <React.Fragment>
          <Wrapper>
            <Particles params={particlesOptions} />
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
            render={({ match }) => (
              <div>
                <Description
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
