import { combineEpics } from 'redux-observable';

import createUser from './createUser';
import loginUser from './loginUser';
import reloadCommunities from './reloadCommunities';

export default combineEpics(
  createUser,
  loginUser,
  reloadCommunities
);
