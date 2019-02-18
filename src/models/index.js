import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import navMiddleware from '../common/ReduxUtils';

import rootEpic from './epics';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware();

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      epicMiddleware,
      navMiddleware
    )
  );
  epicMiddleware.run(rootEpic);
  return store;
};
