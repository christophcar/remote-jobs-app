import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import JobCard from '../components/JobCard'
import Description from '../components/Description'
import Categories from '../components/Categories'
import Filter from '../components/Filter'

storiesOf('Categories', module).add('Category buttons', () => (
  <React.Fragment>
    <Categories />
  </React.Fragment>
))

storiesOf('Job card', module).add('Single card', () => (
  <React.Fragment>
    <JobCard
      position={text('Position', 'Frontend Developer')}
      company={text('Company', 'Apple Inc.')}
      date={text('Date', 'Nov 19')}
    />
  </React.Fragment>
))

storiesOf('Description', module).add('Job description', () => (
  <React.Fragment>
    <Description
      description={text('Description', 'Lorem ipsum dolor sit milir suprum')}
    />
  </React.Fragment>
))

storiesOf('Filter', module).add('Input filter', () => (
  <React.Fragment>
    <Filter />
  </React.Fragment>
))
