import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import navMiddleware from '../common/ReduxNavigation';
import rootEpic from './epics';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, navMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
