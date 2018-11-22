import React, { Component } from 'react'
import JobCard from './JobCard'
import Heading from './Heading'
import Filter from './Filter'
import Categories from './Categories'

export default class Home extends Component {
  render() {
    const { jobs, searchChange } = this.props
    return (
      <React.Fragment>
        <Heading />
        <Filter searchChange={searchChange} />
        <Categories />
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
