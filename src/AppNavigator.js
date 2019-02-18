import React from 'react';
import {
  createStackNavigator
} from 'react-navigation';
import {
  createReduxContainer
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

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

const AppRouteConfigs = {
  Auth: {
    screen: AuthStack
  }
};

export const AppNavigator = createStackNavigator(AppRouteConfigs, {
  initialRouteName: 'Auth',
  headerMode: 'none'
});

const AppContainer = createReduxContainer(AppNavigator, 'root');

class AppWithNavigationState extends React.Component {
  render() {
    return (
      <AppContainer
        state={this.props.nav}
        dispatch={this.props.dispatch}
      />
    );
  }
}

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(AppWithNavigationState);
