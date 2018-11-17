import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Nunito');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 10px;
  font-family: 'Nunito', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #efefef;
}
`
