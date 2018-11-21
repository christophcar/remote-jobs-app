import React, { Component } from 'react'
import JobCard from './JobCard'
import Heading from './Heading'
import Filter from './Filter'

export default class Home extends Component {
  render() {
    const { jobs, searchChange } = this.props
    return (
      <React.Fragment>
        <Heading />
        <Filter searchChange={searchChange} />
        {jobs.map(job => (
          <JobCard
            key={job.id}
            id={job.id}
            position={job.name}
            company={job.email}
            date={job.date}
          />
        ))}
      </React.Fragment>
    )
  }
}
