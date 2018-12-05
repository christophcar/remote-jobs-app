import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700');

* {
  box-sizing: border-box;
  position: relative;
}

body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #efefef;
}
`
