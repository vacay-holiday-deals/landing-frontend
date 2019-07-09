import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import AppHistory from './AppHistory'

// import the components needed
import App from '../App'

const AppRouter = () => (
  <Router history={AppHistory}>
    <div>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
