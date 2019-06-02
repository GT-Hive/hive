import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { actionCreators, actionTypes } from '../actions/community';
import api from '../../requests/communities';

export default action$ => action$.pipe(
  ofType(actionTypes.RELOAD_COMMUNITIES),
  switchMap(() => api.reloadCommunities().pipe(
    map(communities => actionCreators.reloadCommunitiesSucceed(communities)),
    catchError(error => of(
      actionCreators.reloadCommunitiesFailed(error)
    ))
  ))
);
// TODO(roy): handle errors
