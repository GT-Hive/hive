import { actionTypes } from '../actions/user';

// TODO(roy): profileImg is temporarily removed. This should also be a field in future.
const initialState = {
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  intro: '',
  communities: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_NAME:
      return {
        ...state,
        first_name: action.firstName,
        last_name: action.lastName
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
    case actionTypes.CREATE_USER:
      return {
        ...state,
        communities: action.communities
      };
    case actionTypes.CREATE_USER_FAILED:
      console.warn(action.error.response.data);
      return state;
    case actionTypes.CREATE_USER_SUCCEED:
      return {
        ...state,
        id: action.user.id
      };
    default:
      return state;
  }
};
