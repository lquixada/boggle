import 'regenerator-runtime/runtime'
import 'es6-promise'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '../shared/routes'
import { App } from '../shared/components'
import store from '../client/store'

const DesktopApp = () => (
  <Provider store={store}>
    <App>
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    </App>
  </Provider>
)

ReactDOM.hydrate(<DesktopApp />, document.getElementById('app'))
