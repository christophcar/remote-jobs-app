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
  margin-top: 130px;
`

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
  padding: 18px;
  box-shadow: 0 5px 5px rgba(17, 16, 62, 0.1);
  font-size: 22px;
  color: #333;
  font-weight: 700;
  text-decoration: none;
  border: 2px solid rgb(74, 165, 234);
  border-radius: 3px;
  background: white;
  width: 300px;
`

const Image = styled.img`
  display: flex;
  justify-content: center;
  width: 80px;
  margin: auto;
  border-radius: 4px;
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
              const filtered = this.state.jobs.find(
                job => job.id === match.params.id
              )
              return (
                <React.Fragment>
                  {filtered.details.map(description => (
                    <Description
                      title={description.title}
                      body={description.body}
                    />
                  ))}
                  <Description
                    link={<Link href={filtered.href}>Jetzt bewerben</Link>}
                    image={<Image src={filtered.image} />}
                  />
                </React.Fragment>
              )
            }}
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
