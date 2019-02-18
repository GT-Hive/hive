import React from 'react';
import { Provider } from 'react-redux';

import AppWithNavigationState from './AppNavigator';
import store from './models';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
