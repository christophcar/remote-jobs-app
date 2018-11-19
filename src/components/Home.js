import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import JobCard from './JobCard'
import Heading from './Heading'

const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export default class Home extends Component {
  render() {
    const { jobs } = this.props
    return (
      <React.Fragment>
        <Heading />
        {jobs.map(job => (
          <UnstyledLink to={`/jobs/${job.id}`}>
            <JobCard
              key={job.id}
              position={job.position}
              company={job.company}
              date={job.date}
            />
          </UnstyledLink>
        ))}
      </React.Fragment>
    )
  }
}
