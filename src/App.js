import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './models';
import AppWithNavigationState from './AppNavigator';

export const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
