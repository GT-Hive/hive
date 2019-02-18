import { AppNavigator } from '../../AppNavigator';

// const initialState = AppNavigator.router.getStateForAction(
//   AppNavigator.router.getActionForPathAndParams('Auth')
// );

// export default (state = initialState, action) => {
//   let next;
//   switch (action.type) {
//     case actionTypes.RESET_STACK:
//       next = AppNavigator.router.getStateForAction(
//         StackActions.reset({
//           index: 0,
//           actions: [NavigationActions.navigate({ routeName: 'Login' })],
//         })
//       );
//       return next;
//     default:
//       return AppNavigator.router.getStateForAction(action, state);
//   }
// };

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Auth')
);

export default (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
