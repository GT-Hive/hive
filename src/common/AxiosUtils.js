import { actionCreators, actionTypes } from '../models/actions/session';
import client from '../requests/base';

const interceptor = store => next => (action) => {
  const { token, tokenExpireTime } = store.getState().session;
  const { email, password } = store.getState().user;
  if (
    action.type
    === (actionTypes.LOGIN_USER || actionTypes.LOGIN_SUCCEED || actionTypes.LOGIN_FAILED)
    || !(token && tokenExpireTime)
    || new Date(Date.now() < new Date(tokenExpireTime))
  ) return next(action);
  store.dispatch(actionCreators.refreshToken(email, password));
  client
    .post('/auth/login', { user: { email, password } })
    .then(({ data }) => {
      store.dispatch(actionCreators.refreshTokenSucceed(data));

      client.defaults.headers.Authorization = `Bearer ${data.user.token}`;
    })
    .catch(error => store.dispatch(actionCreators.refreshTokenFailed(error)));
  return next(action);
};

export default interceptor;
