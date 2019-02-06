import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from './screens/Login';
import UserInformation from './screens/Registration/UserInformation';
import InterestRegister from './screens/Registration/InterestRegister';
import IntroductionRequest from './screens/Registration/IntroductionRequest';
import NameRequest from './screens/Registration/NameRequest';
import VerifyConfirm from './screens/Registration/VerifyConfirm';
import VerifyRequest from './screens/Registration/VerifyRequest';

import ForgotConfirm from './screens/ForgotConfirm';
import ForgotRequest from './screens/ForgotRequest';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login
  },
  Name: {
    screen: NameRequest
  },
  UserInformation: {
    screen: UserInformation
  },
  Introduction: {
    screen: IntroductionRequest
  },
  VerifyRequest: {
    screen: VerifyRequest
  },
  VerifyConfirm: {
    screen: VerifyConfirm
  },
  Interest: {
    screen: InterestRegister
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

export default class AppWithNavigationState extends React.Component {
  render() {
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <AppContainer />
    );
  }
}
