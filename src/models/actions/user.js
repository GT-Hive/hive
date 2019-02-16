const REGISTER_NAME = 'hive/user/REGISTER_NAME';
const REGISTER_USER_INFORMATION = 'hive/user/REGISTER_USER_INFORMATION';
const REGISTER_INTRODUCTION = 'hive/user/REGISTER_INTRODUCTION';
const REGISTER_INTERESTS = 'hive/user/REGISTER_INTERESTS';

export const actionTypes = {
  REGISTER_NAME,
  REGISTER_USER_INFORMATION,
  REGISTER_INTRODUCTION,
  REGISTER_INTERESTS
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

const registerInterests = interests => ({
  type: REGISTER_INTERESTS,
  interests
});

export const actionCreators = {
  registerInformation,
  registerName,
  registerIntroduction,
  registerInterests
};
