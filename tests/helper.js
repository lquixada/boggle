import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

const mountConnected = (component, store) => {
  return mount(<Provider store={store}>
    {component}
  </Provider>);
}

export default mountConnected;
