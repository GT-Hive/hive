import React from 'react';
import {
  createStackNavigator
} from 'react-navigation';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ForgotConfirm from './screens/ForgotConfirm';
import ForgotRequest from './screens/ForgotRequest';
import Login from './screens/Login';
import InterestRegister from './screens/Registration/InterestRegister';
import IntroductionRequest from './screens/Registration/IntroductionRequest';
import NameRequest from './screens/Registration/NameRequest';
import RegisterConfirm from './screens/Registration/RegisterConfirm';
import UserInformationRequest from './screens/Registration/UserInformationRequest';


const AuthStack = createStackNavigator({
  Login: {
    screen: Login
  },
  Name: {
    screen: NameRequest
  },
  UserInformation: {
    screen: UserInformationRequest
  },
  Introduction: {
    screen: IntroductionRequest
  },
  Interest: {
    screen: InterestRegister
  },
  RegisterConfirm: {
    screen: RegisterConfirm
  },
  ForgotRequest: {
    screen: ForgotRequest
  },
  ForgotConfirm: {
    screen: ForgotConfirm
  },
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
});

export const AppNavigator = createStackNavigator({
  Auth: {
    screen: AuthStack
  }
}, {
  initialRouteName: 'Auth',
  headerMode: 'none'
});

// class AppWithNavigationState extends React.Component {
//   static propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     nav: PropTypes.object.isRequired
//   };

//   render() {
//     const { dispatch, nav } = this.props;
//     const AppContainer = createAppContainer(AppNavigator);
//     return (
//       <AppContainer
//         navigation={addNavigationHelpers({
//           dispatch,
//           state: nav
//         })}
//       />
//     );
//   }
// }


const mapStateToProps = state => ({ nav: state.nav });

const AppWithNavigationState = connect(mapStateToProps)(createReduxContainer(AppNavigator, 'root'));

export default AppWithNavigationState;
