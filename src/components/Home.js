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
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            id={index}
            position={job.position}
            company={job.company}
            image={job.image}
            date={job.date}
          />
        ))}
      </React.Fragment>
    )
  }
}
