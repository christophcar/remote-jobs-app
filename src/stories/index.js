import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import JobCard from '../components/JobCard'

storiesOf('Job card', module).add('Single card', () => (
  <React.Fragment>
    <JobCard
      position={text('Position', 'Frontend Developer')}
      company={text('Company', 'Apple Inc.')}
      date={text('Date', 'Nov 19')}
    />
  </React.Fragment>
))

// storiesOf('ui/Button', module).add('default', () => (
//   <React.Fragment>
//     <Button>{text('Label', 'Hello world')}</Button>
//   </React.Fragment>
// ))

// storiesOf('ui/Input', module).add('default', () => (
//   <React.Fragment>
//     <Input onEnter={action('onEnter')} />
//   </React.Fragment>
// ))

// storiesOf('ProgressBar', module).add('default', () => (
//   <React.Fragment>
//     <ProgressBar
//       percentage={number('percentage', 0, {
//         range: true,
//         min: 0,
//         max: 1,
//         step: 0.01
//       })}
//     />
//     <StyleBox h={40} />
//     <ProgressBar percentage={1 / 3} />
//     <StyleBox h={40} />
//     <ProgressBar percentage={1 / 2} />
//     <StyleBox h={40} />
//     <ProgressBar percentage={2 / 3} />
//     <StyleBox h={40} />
//     <ProgressBar percentage={1} />
//   </React.Fragment>
// ))

// storiesOf('Separator', module).add('default', () => (
//   <React.Fragment>
//     <Separator text="One" />
//     <StyleBox h={40} />
//     <Separator text="Two words" />
//   </React.Fragment>
// ))

// storiesOf('ToggleButton', module).add('default', () => (
//   <React.Fragment>
//     <ToggleButton
//       isDefault={boolean('isDefault', true)}
//       onClick={action('onClick')}
//       defaultText={text('defaultText', 'Click me')}
//       alternativeText={text('alternativeText', 'I was clicked')}
//     />
//   </React.Fragment>
// ))
