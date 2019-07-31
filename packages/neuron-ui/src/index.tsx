import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

import 'styles/index.scss'
import 'utils/i18n'
import 'utils/loadTheme'
import * as serviceWorker from 'serviceWorker'

import Navbar from 'containers/Navbar'
import Notification from 'containers/Notification'
import Main from 'containers/Main'
import Footer from 'containers/Footer'
import ErrorBoundary from 'components/ErrorBoundary'
import withProviders from 'states/stateProvider'

export const containers: CustomRouter.Route[] = [
  {
    name: 'Navbar',
    path: '/',
    exact: false,
    comp: Navbar,
  },
  {
    name: 'Main',
    path: '/',
    exact: false,
    comp: Main,
  },
  {
    name: 'Footer',
    path: '/',
    exact: false,
    comp: Footer,
  },
  {
    name: 'Notification',
    path: '/',
    exact: false,
    comp: Notification,
  },
]

const App = withProviders(({ dispatch }: any) => (
  <Router>
    {containers.map(container => {
      return (
        <Route
          {...container}
          key={container.name}
          render={routeProps => (
            <ErrorBoundary>
              <container.comp {...routeProps} dispatch={dispatch} />
            </ErrorBoundary>
          )}
        />
      )
    })}
  </Router>
))

Object.defineProperty(App, 'displayName', {
  value: 'App',
})

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()

export default undefined
