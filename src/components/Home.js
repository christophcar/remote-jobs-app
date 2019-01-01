import React, { Component } from 'react'
import JobCard from './JobCard'
import Categories from './Categories'
import PropTypes from 'prop-types'
import StartPage from './StartPage'
import Footer from './Footer'

export default class Home extends Component {
  static propTypes = {
    jobs: PropTypes.array,
    searchChange: PropTypes.func
  }

  render() {
    const { jobs, searchChange } = this.props
    return (
      <React.Fragment>
        <StartPage />
        <Categories searchChange={searchChange} />
        {jobs.map(job => (
          <JobCard
            key={job.key}
            id={job.id}
            position={job.position}
            company={job.company}
            image={job.image}
            date={job.date}
          />
        ))}
        <Footer />
      </React.Fragment>
    )
  }
}
