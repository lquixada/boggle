import 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {AppContainer} from 'react-hot-loader';

import routes from '../shared/routes'; // eslint-disable-line no-unused-vars
import store from './store';

const renderApp = () => {
  const routes = require('../shared/routes').default;

  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
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
