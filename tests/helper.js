import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import store from '../store';

const mountConnected = (component) => {
  return mount(<Provider store={store}>
    {component}
  </Provider>);
}

export default mountConnected;
