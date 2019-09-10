import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, Router } from 'react-router-dom'
import Apphistory from './routes/AppHistory'
import './index.scss'
import App from './App'
import NotFound from './pages/NotFound'
import Landing from './components/Landing'
import Policy from './pages/Policy'
import * as serviceWorker from './serviceWorker'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: 'top center',
  timeout: 8000,
  offset: '30px',
  transition: 'fade'
}

const AppRouter = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <Router history={Apphistory}>
      <Switch>
        <Route exact path='/' component={App} />
        {/* <Route
          exact
          path='/vacay-holiday-deals-privacy-policy'
          component={Policy}></Route> */}
        <Route
          exact
          path='/:title'
          render={props => (
            <Landing key={props.match.params.title} {...props} />
          )}
        />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </AlertProvider>
)

ReactDOM.render(<AppRouter />, document.getElementById('root'))
serviceWorker.unregister()
