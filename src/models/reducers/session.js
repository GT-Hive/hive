import { actionTypes } from '../actions/session';

const initialState = {
  token: null,
  token_expired_time: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCEED:
    case actionTypes.REFRESH_TOKEN_SUCCEED:
      return {
        token: action.user.token,
        token_expired_time: action.user.exp
      };
    case actionTypes.REFRESH_TOKEN_FAILED:
    case actionTypes.LOGIN_FAILED:
      console.warn(action.error.response.data);
      return state;
    case actionTypes.REFRESH_TOKEN:
    case actionTypes.LOGIN_USER:
    default:
      return state;
  }
};
