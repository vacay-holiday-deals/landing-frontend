import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import App from './App'
import NotFound from './components/NotFound'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='*' component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(<AppRouter />, document.getElementById('root'))
