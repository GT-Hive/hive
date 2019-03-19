const RESET_STACK = 'hive/navigation/RESET_STACK';
const LOGIN_USER = 'hive/navigation/LOGIN_USER';

export const actionTypes = {
  RESET_STACK,
  LOGIN_USER
};

const resetStack = () => ({
  type: RESET_STACK
});

const loginUser = () => ({
  type: LOGIN_USER
});

export const actionCreators = {
  resetStack,
  loginUser
};
