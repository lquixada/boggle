import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '../shared/routes'
import { App } from '../shared/components'
import store from './store'

const HotApp = () => (
  <Provider store={store}>
    <App>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </App>
  </Provider>
)

export default hot(module)(HotApp)
