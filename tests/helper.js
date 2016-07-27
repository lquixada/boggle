import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

// Garante que o módulo será executado a cada require, ou seja,
// ignora o cache de require do node
export const rerequire = (path) => {
  delete require.cache[require.resolve(path)];
  return require(path);
};

export const mountConnected = (component, store) => {
  return mount(<Provider store={store}>
    {component}
  </Provider>);
};
