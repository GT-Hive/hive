import { combineReducers } from 'redux';

import community from './community';
import nav from './navigation';
import screen from './screen';
import user from './user';

export default combineReducers({
  community,
  nav,
  screen,
  user
});
