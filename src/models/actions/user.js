const REGISTER_NAME = 'hive/user/REGISTER_NAME';
const REGISTER_USER_INFORMATION = 'hive/user/REGISTER_USER_INFORMATION';
const REGISTER_INTRODUCTION = 'hive/user/REGISTER_INTRODUCTION';
const CREATE_USER = 'hive/user/CREATE_USER';
const CREATE_USER_SUCCEED = 'hive/user/CREATE_USER_SUCCEED';
const CREATE_USER_FAILED = 'hive/user/CREATE_USER_FAILED';

export const actionTypes = {
  REGISTER_NAME,
  REGISTER_USER_INFORMATION,
  REGISTER_INTRODUCTION,
  CREATE_USER,
  CREATE_USER_SUCCEED,
  CREATE_USER_FAILED
};

const registerName = (firstName, lastName) => ({
  type: REGISTER_NAME,
  firstName,
  lastName
});

const registerInformation = (email, password) => ({
  type: REGISTER_USER_INFORMATION,
  email,
  password
});

const registerIntroduction = intro => ({
  type: REGISTER_INTRODUCTION,
  intro
});

const createUser = (userInfo, communities) => ({
  type: CREATE_USER,
  userInfo,
  communities
});

const createUserSucceed = user => ({
  type: CREATE_USER_SUCCEED,
  user
});

const createUserFailed = error => ({
  type: CREATE_USER_FAILED,
  error
});

export const actionCreators = {
  registerInformation,
  registerName,
  registerIntroduction,
  createUser,
  createUserSucceed,
  createUserFailed
};
