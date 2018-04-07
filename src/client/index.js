import 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {renderRoutes} from 'react-router-config';

import routes from '../shared/routes';
import store from './store';
import history from './history';
import {HotContainer} from './components';

const renderApp = () => {
  const routes = require('../shared/routes').default;

  ReactDOM.hydrate(
    <HotContainer>
      <Provider store={store}>
        <ConnectedRouter history={history} children={renderRoutes(routes)} />
      </Provider>
    </HotContainer>
    , document.getElementById('game')
  );
};

if (module.hot) {
  module.hot.accept('../shared/routes', renderApp);
}

renderApp();

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
}
