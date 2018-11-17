// import React from 'react'

// import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { text, boolean, number } from '@storybook/addon-knobs'

// import Todo from '../components/Todo'
// import Button from '../components/Button'
// import Input from '../components/Input'
// import ProgressBar from '../components/ProgressBar'
// import Separator from '../components/Separator'
// import ToggleButton from '../components/ToggleButton'

// storiesOf('Todo', module).add('default', () => (
//   <React.Fragment>
//     <Todo
//       text={text('Todo 1: text', 'Hello world')}
//       done={boolean('Todo 1: done', false)}
//       onToggle={action('Todo 1: onToggle')}
//       onDelete={action('Todo 1: onDelete')}
//     />
//     <StyleBox h={40} />
//     <Todo
//       text={text('Todo 2: text', 'Lorem ipsum dolor sit')}
//       done={boolean('Todo 2: done', false)}
//       onToggle={action('Todo 2: onToggle')}
//       onDelete={action('Todo 2: onDelete')}
//     />
//   </React.Fragment>
// ))

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
//         step: 0.01,
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
