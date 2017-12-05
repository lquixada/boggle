import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

export const createServer = () => {
  // eslint-disable-next-line global-require
  const server = require('../server');

  return server.default.listen(8001);
};

export const mountConnected = (component, store) =>
  mount(<Provider store={store}>
    {component}
  </Provider>);
