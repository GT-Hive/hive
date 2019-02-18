import { combineEpics } from 'redux-observable';

import registerUser from './registerUser';

export default combineEpics(
  registerUser
);
