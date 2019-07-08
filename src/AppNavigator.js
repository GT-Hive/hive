import React from 'react';
import { BackHandler } from 'react-native';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import ForgotConfirm from './screens/ForgotConfirm';
import ForgotRequest from './screens/ForgotRequest';
import Login from './screens/Login';
import CommunitiesRegister from './screens/Registration/CommunitiesRegister';
import IntroductionRequest from './screens/Registration/IntroductionRequest';
import NameRequest from './screens/Registration/NameRequest';
import UserInformationRequest from './screens/Registration/UserInformationRequest';
import CommunitiesList from './screens/Community/CommunitiesList';
import CommunityAdd from './screens/Community/CommunityAdd';

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
  CommunitiesRegister: {
    screen: CommunitiesRegister
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

const CommunityStack = createStackNavigator({
  CommunitiesList: {
    screen: CommunitiesList
  },
  CommunityAdd: {
    screen: CommunityAdd
  }
}, {
  initialRouteName: 'CommunitiesList',
  headerMode: 'none'
});

const AppRouteConfigs = {
  Auth: {
    screen: AuthStack
  },
  Community: {
    screen: CommunityStack
  }
};

export const AppNavigator = createStackNavigator(AppRouteConfigs, {
  initialRouteName: 'Community',
  headerMode: 'none'
});

class AppWithNavigationState extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  _onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index > 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    const { dispatch, nav } = this.props;
    const AppContainer = createReduxContainer(AppNavigator);
    return (
      <AppContainer
        state={nav}
        dispatch={dispatch}
      />
    );
  }
}

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(AppWithNavigationState);
