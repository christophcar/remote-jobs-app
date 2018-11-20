import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  width: 400px;
  max-width: 400px;
  height: 50px;
  border: none;
  background: #fff;
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  font-size: 20px;
`

const Button = styled.button`
  color: white;
  font-size: 20px;
  font-weight: 300;
  width: 150px;
  height: 50px;
  margin: 5px;
  background: cornflowerblue;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
`

export default class Filter extends Component {
  render() {
    return (
      <Wrapper>
        <Input placeholder="Search for jobs" />
        <Button>Filter</Button>
      </Wrapper>
    )
  }
}
