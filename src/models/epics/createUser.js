import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, flatMap } from 'rxjs/operators';

import { actionCreators as navActionCreators } from '../actions/navigation';
import { actionCreators as userActionCreators, actionTypes } from '../actions/user';
import api from '../../requests/auth';

export default action$ => action$.pipe(
  ofType(actionTypes.CREATE_USER),
  switchMap(action => of(api.createUser(action.userInfo, action.interests)).pipe(
    flatMap(user => [
      userActionCreators.createUserSucceed(user),
      navActionCreators.resetStack()
    ])
  ))
);
// TODO(roy): catch and handle error
