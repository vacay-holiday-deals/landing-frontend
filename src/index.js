import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, Router } from 'react-router-dom'
import Apphistory from './routes/AppHistory'
import './index.scss'
import App from './App'
import NotFound from './components/NotFound'
import Landing from './components/Landing'
import * as serviceWorker from './serviceWorker'

const AppRouter = () => (
  <Router history={Apphistory}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route
        exact
        path='/:title'
        render={props =>
          props.match.params.title ? (
            <Landing key={props.match.params.title} {...props} />
          ) : (
            <NotFound />
          )
        }
      />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(<AppRouter />, document.getElementById('root'))
serviceWorker.unregister()
