import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import AppHistory from './AppHistory'
import PrivateRoute from 'react-private-route'

// import the components needed

const AppRouter = () => (
  <Router history={AppHistory}>
    <div>
      <Switch />
    </div>
  </Router>
)

export default AppRouter
