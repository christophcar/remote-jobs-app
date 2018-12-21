import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './containers/App'
import GlobalStyle from './components/GlobalStyle'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { searchJobs } from './ducks/reducer'
import { createLogger } from 'redux-logger'

const logger = createLogger()
const store = createStore(searchJobs, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
