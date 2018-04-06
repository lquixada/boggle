import React from 'react';
import {AppContainer} from 'react-hot-loader';

export const HotContainer = ({children}) => {
  if (module.hot) {
    return <AppContainer>{children}</AppContainer>;
  }
  return children;
};
