import { combineEpics } from 'redux-observable';

import createUser from './createUser';
import reloadCommunities from './reloadCommunities';

export default combineEpics(
  createUser,
  reloadCommunities
);
