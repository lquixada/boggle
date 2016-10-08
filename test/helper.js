import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

export const createServer = () => {
  const server = require('../server');
  return server.default.listen(8001);
};

export const mountConnected = (component, store) => {
  return mount(<Provider store={store}>
    {component}
  </Provider>);
};
