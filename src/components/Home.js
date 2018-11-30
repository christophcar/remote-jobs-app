import React, { Component } from 'react'
import JobCard from './JobCard'
import Filter from './Filter'
import Categories from './Categories'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import Footer from './Footer'

export default class Home extends Component {
  static propTypes = {
    jobs: PropTypes.array,
    searchChange: PropTypes.func,
    clickChange: PropTypes.func
  }

  render() {
    const { jobs, searchChange } = this.props
    return (
      <React.Fragment>
        <Navigation />
        <Filter searchChange={searchChange} />
        <Categories searchChange={searchChange} />
        {jobs.map((job, index) => (
          <JobCard
            key={index}
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
