import React, { Component } from 'react'
import styled from 'styled-components'
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
// import Home from './Home'
// import Config from './Config'

const Card = styled.section`
  margin-right: auto;
  margin-left: auto;
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
  max-width: 800px;
  height: auto;
  box-shadow: 0 8px 16px rgba(80, 80, 80, 0.4);
`

// const Wrapper = styled.section`
//   display: grid;
//   grid-template-rows: auto 50px;
//   height: 100vh;

//   nav {
//     display: flex;
//   }

//   a:any-link {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-decoration: none;
//     color: black;
//     width: 100%;
//     background: #efefef;

//     &:first-child {
//       border-right: 1px solid white;
//     }

//     &.active {
//       background: deeppink;
//       color: white;
//     }
//   }
// `

export default class App extends Component {
  // state = {
  //   showDoneTodos: true
  // }

  // toggleShowDoneTodos = () => {
  //   this.setState({
  //     showDoneTodos: !this.state.showDoneTodos
  //   })
  // }

  render() {
    return (
      <React.Fragment>
        <Card>
          <h2>Frontend Developer</h2>
          <h3>Apple Inc.</h3>
          <p>Nov 17</p>
        </Card>
        <Card>
          <h2>Backend Developer</h2>
          <h3>Google Inc.</h3>
          <p>Nov 16</p>
        </Card>
        <Card>
          <h2>Full Stack Developer</h2>
          <h3>Amazon Inc.</h3>
          <p>Nov 15</p>
        </Card>
        <Card>
          <h2>Mobile Developer</h2>
          <h3>Facebook Inc.</h3>
          <p>Nov 14</p>
        </Card>
      </React.Fragment>
      // <Router>
      //   <Wrapper>
      //     <Route
      //       exact
      //       path="/"
      //       render={() => <Home showDoneTodos={this.state.showDoneTodos} />}
      //     />
      //     <Route
      //       path="/config"
      //       render={() => (
      //         <Config
      //           showDoneTodos={this.state.showDoneTodos}
      //           onToggle={this.toggleShowDoneTodos}
      //         />
      //       )}
      //     />
      //     <nav>
      //       <NavLink exact activeClassName="active" to="/">
      //         Home
      //       </NavLink>
      //       <NavLink activeClassName="active" to="/config">
      //         Config
      //       </NavLink>
      //     </nav>
      //   </Wrapper>
      // </Router>
    )
  }
}
