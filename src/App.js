import React from 'react';
import { Provider } from 'react-redux';

import AppWithNavigationState from './AppNavigator';
import configureStore from './models';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
