import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import apiMiddleWare from '../common/AxiosUtils';
// import { navMiddleware } from '../common/ReduxUtils';
import rootEpic from './epics';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware();

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      epicMiddleware,
      // navMiddleware,
      apiMiddleWare
    )
  );
  epicMiddleware.run(rootEpic);
  return store;
};
