import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import App from './App'
import Login from './components/forms/Login'
import Offers from './components/pages/Offers'

import * as serviceWorker from './serviceWorker'

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
      <Route path='/offers' component={Offers} />
    </div>
  </Router>
)

ReactDOM.render(<AppRouter />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
