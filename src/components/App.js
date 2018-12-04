import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Description from './Description'
import styled from 'styled-components'
import jobs from '../stepstone.json'
import Autosuggest from 'react-autosuggest'
// import Particles from 'react-particles-js'

const Loading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`

// const Wrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: -1;
// `

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 200
//     },
//     size: {
//       value: 2
//     }
//   },
//   interactivity: {
//     events: {
//       onhover: {
//         enable: true,
//         mode: 'repulse'
//       }
//     }
//   }
// }

const languages = [
  {
    name: 'javascript'
  },
  {
    name: 'python'
  }
]

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : languages.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      )
}

const getSuggestionValue = suggestion => suggestion.name

const renderSuggestion = suggestion => <div>{suggestion.name}</div>

export default class App extends Component {
  state = {
    jobs: jobs,
    searchfield: '',
    value: '',
    suggestions: []
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
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
    const { value, suggestions } = this.state
    const filteredJobs = this.state.jobs.filter(job => {
      return (
        job.position
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        job.company.toLowerCase().includes(this.state.searchfield)
      )
    })
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    }

    // this.save()

    return jobs.length ? (
      <Router>
        <React.Fragment>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
          {/* <Wrapper>
            <Particles params={particlesOptions} />
          </Wrapper> */}
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
    ) : (
      <Loading>Loading...</Loading>
    )
  }
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
