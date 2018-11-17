import React, { Component } from 'react'
import styled from 'styled-components'
import JobCard from './JobCard'
import Heading from './Heading'

// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const Wrapper = styled.section``

export default class App extends Component {
  // state = {
  //   showDoneTodos: true
  // }

  // toggleShowDoneTodos = () => {
  //   this.setState({
  //     showDoneTodos: !this.state.showDoneTodos
  //   })
  // }

  jobs = [
    {
      title: 'Frontend Developer',
      position: 'Apple Inc.',
      date: 'Nov 17'
    },
    {
      title: 'Backend Developer',
      position: 'Google Inc.',
      date: 'Nov 16'
    },
    {
      title: 'Full Stack Developer',
      position: 'Amazon Inc.',
      date: 'Nov 15'
    },
    {
      title: 'Mobile Developer',
      position: 'Facebook Inc.',
      date: 'Nov 14'
    },
    {
      title: 'React.js Developer',
      position: 'Airbnb Inc.',
      date: 'Nov 13'
    },
    {
      title: 'Vue.js Developer',
      position: 'PayPal Inc.',
      date: 'Nov 12'
    }
  ]

  render() {
    return (
      <React.Fragment>
        <Heading />
        <Wrapper>
          {this.jobs.map(jobs => (
            <JobCard
              title={jobs.title}
              position={jobs.position}
              date={jobs.date}
            />
          ))}
        </Wrapper>
      </React.Fragment>

      // <Router>
      //   <Wrapper>
      //     <Route
      //       exact
      //       path="/"
      //       render={() => <Home showDoneTodos={this.state.showDoneTodos} />}
      //     />
      //     <Route
      //       path="/config"
      //       render={() => (
      //         <Config
      //           showDoneTodos={this.state.showDoneTodos}
      //           onToggle={this.toggleShowDoneTodos}
      //         />
      //       )}
      //     />
      //     <nav>
      //       <NavLink exact activeClassName="active" to="/">
      //         Home
      //       </NavLink>
      //       <NavLink activeClassName="active" to="/config">
      //         Config
      //       </NavLink>
      //     </nav>
      //   </Wrapper>
      // </Router>
    )
  }
}
