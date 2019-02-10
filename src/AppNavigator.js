import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from './screens/Login';
import InterestRegister from './screens/Registration/InterestRegister';
import IntroductionRequest from './screens/Registration/IntroductionRequest';
import NameRequest from './screens/Registration/NameRequest';
import UserInformationRequest from './screens/Registration/UserInformationRequest';
import VerifyConfirm from './screens/Registration/VerifyConfirm';
import VerifyRequest from './screens/Registration/VerifyRequest';

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
  VerifyRequest: {
    screen: VerifyRequest
  },
  VerifyConfirm: {
    screen: VerifyConfirm
  },
  Interest: {
    screen: InterestRegister
  }
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
