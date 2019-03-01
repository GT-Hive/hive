import { ofType } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';

import { actionCreators, actionTypes } from '../actions/community';
import api from '../../requests/communities';

export default action$ => action$.pipe(
  ofType(actionTypes.RELOAD_COMMUNITIES),
  switchMap(() => api.reloadCommunities().pipe(
    map(communities => actionCreators.reloadCommunitiesSucceed(communities))
  ))
);
// TODO(roy): handle errors
