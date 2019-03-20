import React from 'react';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';

import configureStore from './models';
import AppWithNavigationState from './AppNavigator';
import { actionCreators } from './models/actions/navigation';

const store = configureStore();
const persistor = persistStore(store, null, () => {
  if (store.getState().session.token) {
    store.dispatch(actionCreators.loginUser());
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}
