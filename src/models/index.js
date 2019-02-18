import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { navMiddleware } from '../AppNavigator';

import rootEpic from './epics';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware();
epicMiddleware.run(rootEpic);

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      epicMiddleware,
      navMiddleware
    )
  );
  return store;
};
