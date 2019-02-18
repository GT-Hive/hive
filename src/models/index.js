import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware, createReactNavigationReduxMiddleware } from 'redux-observable';

import rootEpic from './epics';
import rootReducer from './reducers';

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

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
