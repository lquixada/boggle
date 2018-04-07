import 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {renderRoutes} from 'react-router-config';
import {AppContainer} from 'react-hot-loader';

import routes from '../shared/routes';
import store from './store';
import history from './history';

const renderApp = () => {
  const routes = require('../shared/routes').default;

  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history} children={renderRoutes(routes)} />
      </Provider>
    </AppContainer>
    , document.getElementById('game')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('../shared/routes', renderApp);
}

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
}
