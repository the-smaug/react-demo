import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import 'normalize.css'
import './index.css'

import App from './App'
import stores from './stores/RootStore'

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('app')
)
