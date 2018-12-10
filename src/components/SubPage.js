import React, { Component } from 'react'
import Description from './Description'
import styled from 'styled-components'

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
  padding: 18px;
  box-shadow: 0 5px 5px rgba(17, 16, 62, 0.1);
  font-size: 22px;
  color: #333;
  font-weight: 700;
  text-decoration: none;
  border: 2px solid rgb(74, 165, 234);
  border-radius: 3px;
  background: white;
  width: 300px;
`

const Image = styled.img`
  display: flex;
  justify-content: center;
  width: 80px;
  margin: auto;
  border-radius: 4px;
`

export default class SubPage extends Component {
  render() {
    const { filteredJobs } = this.props
    return (
      <React.Fragment>
        {filteredJobs.details.map(description => (
          <Description title={description.title} body={description.body} />
        ))}
        <Description
          link={<Link href={filteredJobs.href}>Jetzt bewerben</Link>}
          image={<Image src={filteredJobs.image} />}
        />
      </React.Fragment>
    )
  }
}
