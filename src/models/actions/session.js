const LOGIN_USER = 'hive/session/LOGIN_USER';
const LOGIN_SUCCEED = 'hive/session/LOGIN_SUCCEED';
const LOGIN_FAILED = 'hive/session/LOGIN_FAILED';
const REFRESH_TOKEN = 'hive/session/REFRESH_TOKEN';
const REFRESH_TOKEN_SUCCEED = 'hive/session/REFRESH_TOKEN_SUCCEED';
const REFRESH_TOKEN_FAILED = 'hive/session/REFRESH_TOKEN_FAILED';

export const actionTypes = {
  LOGIN_USER,
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCEED,
  REFRESH_TOKEN_FAILED
};

const loginUser = (email, password) => ({
  type: LOGIN_USER,
  email,
  password
});

const loginSucceed = user => ({
  type: LOGIN_SUCCEED,
  user
});

const loginFailed = error => ({
  type: LOGIN_FAILED,
  error
});

const refreshToken = (email, password) => ({
  type: REFRESH_TOKEN,
  email,
  password
});

const refreshTokenSucceed = user => ({
  type: REFRESH_TOKEN_SUCCEED,
  user
});

const refreshTokenFailed = error => ({
  type: REFRESH_TOKEN_FAILED,
  error
});

export const actionCreators = {
  loginUser,
  loginSucceed,
  loginFailed,
  refreshToken,
  refreshTokenSucceed,
  refreshTokenFailed
};
