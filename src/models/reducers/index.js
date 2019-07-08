import { AsyncStorage as storage } from 'react-native';
import { persistCombineReducers } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { encrypt } from '../../common/ReduxUtils';
import community from './community';
import nav from './navigation';
import screen from './screen';
import session from './session';
import user from './user';

const persistConfig = {
  storage,
  key: 'root',
  blacklist: ['session', 'nav'],
  stateReconciler: autoMergeLevel2,
  transforms: [encrypt],

  // remove later
  debug: true
};

export default persistCombineReducers(persistConfig, {
  community,
  nav,
  screen,
  session,
  user
});
