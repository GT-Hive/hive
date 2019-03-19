import { NavigationActions, StackActions } from 'react-navigation';

import { AppNavigator } from '../../AppNavigator';
import { actionTypes } from '../actions/navigation';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Auth')
);

export default (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case actionTypes.RESET_STACK:
      nextState = AppNavigator.router.getStateForAction(
        StackActions.reset({
          index: 0,
          key: null,
          actions: [NavigationActions.navigate({ routeName: 'Auth' })]
        }),
        state
      );
      break;
    case actionTypes.LOGIN_USER:
      nextState = AppNavigator.router.getStateForAction(
        StackActions.reset({
          index: 0,
          key: null,
          actions: [NavigationActions.navigate({ routeName: 'Main' })]
        }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};
