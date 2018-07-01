import React from 'react'
import {renderToString} from 'react-dom/server'
import {ServerStyleSheet, StyleSheetManager} from 'styled-components'
import {matchRoutes, renderRoutes} from 'react-router-config'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {Helmet} from 'react-helmet'

import template from '../template'
import routes from '../../shared/routes'
import configureStore from '../../shared/store'
import {App} from '../../shared/components'

export default (req, res) => {
  const match = matchRoutes(routes, req.url)

  if (match.length === 0) {
    return res.status(404).end('Not found')
  }

  const store = configureStore()
  const sheet = new ServerStyleSheet()
  const html = renderToString(
    /* Provides "sheet" to styled components */
    <StyleSheetManager sheet={sheet.instance}>
      {/* Provides "store" to redux containers */}
      <Provider store={store}>
        {/* Provides "head" data reset styles */}
        <App>
          {/* Provides "router" to router components */}
          <StaticRouter location={req.url} context={{}}>
            {renderRoutes(routes)}
          </StaticRouter>
        </App>
      </Provider>
    </StyleSheetManager>
  )

  const state = JSON.stringify(store.getState())
  const helmet = Helmet.renderStatic()
  const styles = sheet.getStyleTags()

  res.send(template({state, helmet, styles, html}))
}
