import React, { Component } from 'react'
import JobCard from './JobCard'
import Heading from './Heading'
import Filter from './Filter'

export default class Home extends Component {
  render() {
    const { jobs } = this.props
    return (
      <React.Fragment>
        <Heading />
        <Filter />
        {jobs.map(job => (
          <JobCard
            key={job.id}
            id={job.id}
            position={job.position}
            company={job.company}
            date={job.date}
          />
        ))}
      </React.Fragment>
    )
  }
}
