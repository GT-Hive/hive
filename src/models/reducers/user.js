import { actionTypes } from '../actions/user';

// TODO(roy): profileImg is temporarily removed. This should also be a field in future.
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  intro: '',
  interests: new Set()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_NAME:
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName
      };
    case actionTypes.REGISTER_USER_INFORMATION:
      return {
        ...state,
        email: action.email,
        password: action.password
      };
    case actionTypes.REGISTER_INTRODUCTION:
      return {
        ...state,
        intro: action.intro
      };
    case actionTypes.REGISTER_USER:
      action.interests.forEach((interest) => {
        state.interests.add(interest);
      });
      return state;
    default:
      return state;
  }
};
