import React, { Component } from 'react'
import JobCard from './JobCard'
import Heading from './Heading'
import Filter from './Filter'
import Categories from './Categories'
import PropTypes from 'prop-types'

export default class Home extends Component {
  static propTypes = {
    jobs: PropTypes.array,
    searchChange: PropTypes.func,
    clickChange: PropTypes.func
  }

  render() {
    const { jobs, searchChange, clickChange } = this.props
    return (
      <React.Fragment>
        <Heading />
        <Filter searchChange={searchChange} />
        <Categories clickChange={clickChange} />
        {jobs.map(job => (
          <JobCard
            key={job.id}
            id={job.id}
            position={job.name}
            company={job.email}
            date={job.id}
          />
        ))}
      </React.Fragment>
    )
  }
}
