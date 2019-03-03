const DISPLAY_SUCCESS_TOAST = 'hive/screen/DISPLAY_SUCCESS_TOAST';
const DISPLAY_WARNING_TOAST = 'hive/screen/DISPLAY_WARNING_TOAST';
const DISPLAY_ERROR_TOAST = 'hive/screen/DISPLAY_ERROR_TOAST';
const HIDE_TOAST = 'hive/screen/HIDE_TOAST';

export const actionTypes = {
  DISPLAY_SUCCESS_TOAST,
  DISPLAY_WARNING_TOAST,
  DISPLAY_ERROR_TOAST,
  HIDE_TOAST
};

const toastAction = (message, duration, type) => ({
  type,
  payload: {
    message,
    duration
  }
});

const displaySuccessToast = (message, duration = 4000) => {
  return toastAction(message, duration, actionTypes.DISPLAY_SUCCESS_TOAST);
};

const displayWarningToast = (message, duration = 4000) => {
  return toastAction(message, duration, actionTypes.DISPLAY_WARNING_TOAST);
};

const displayErrorToast = (message, duration = 4000) => {
  return toastAction(message, duration, actionTypes.DISPLAY_ERROR_TOAST);
};

const hideToast = () => ({
  type: actionTypes.HIDE_TOAST,
  payload: {}
});

export const actionCreators = {
  displaySuccessToast,
  displayWarningToast,
  displayErrorToast,
  hideToast
};
