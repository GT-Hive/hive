import { combineEpics } from 'redux-observable';

import createUser from './createUser';

export default combineEpics(
  createUser
);
