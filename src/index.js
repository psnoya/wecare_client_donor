import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './state/store/configureStore'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'

window.store = store
axios.defaults.baseURL = 'http://localhost:3000/api'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
