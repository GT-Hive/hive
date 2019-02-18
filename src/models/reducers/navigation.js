import { AppNavigator } from '../../AppNavigator';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Auth')
);

export default (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
