import { actionTypes } from '../actions/screen';

const initialState = {
  message: null,
  error: false,
  warning: false,
  duration: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_SUCCESS_TOAST:
    case actionTypes.DISPLAY_WARNING_TOAST:
    case actionTypes.DISPLAY_ERROR_TOAST:
    case actionTypes.HIDE_TOAST:
      return {
        message: action.payload.message,
        duration: action.payload.duration,
        error: action.type === actionTypes.DISPLAY_ERROR_TOAST,
        warning: action.type === actionTypes.DISPLAY_WARNING_TOAST
      };
    default:
      return state;
  }
};
