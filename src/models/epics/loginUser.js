import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, flatMap, switchMap } from 'rxjs/operators';

import api from '../../requests/auth';
import { actionCreators as navActionCreators } from '../actions/navigation';
import { actionCreators as screenActionCreators } from '../actions/screen';
import { actionCreators as sessionActionCreators, actionTypes } from '../actions/session';

export default action$ => action$.pipe(
  ofType(actionTypes.LOGIN_USER),
  switchMap(action => api.loginUser(action.email, action.password).pipe(
    flatMap(user => [
      sessionActionCreators.loginSucceed(user),
      navActionCreators.loginUser()
    ]),
    catchError(error => of(
      sessionActionCreators.loginFailed(error),
      screenActionCreators.displayErrorToast(error.response.data.error)
    ))
  ))
);
