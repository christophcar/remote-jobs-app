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

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 110px;
  height: 80px;
  margin: auto;
  border-radius: 8px;
  background: white;
`

const Image = styled.img`
  display: flex;
  justify-content: center;
  width: 90px;
  margin: auto;
`

export default class SubPage extends Component {
  render() {
    const { filtered } = this.props
    return (
      <React.Fragment>
        {
          <Wrapper>
            <Image src={filtered.image} />
          </Wrapper>
        }
        {filtered.details.map(description => (
          <Description title={description.title} body={description.body} />
        ))}
        <Description link={<Link href={filtered.href}>Jetzt bewerben</Link>} />
      </React.Fragment>
    )
  }
}
