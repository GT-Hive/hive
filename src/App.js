import React from 'react';

import Login from './screens/Login';
import RegName from './screens/Registration/NameRequest';
import EmailRequest from './screens/Registration/EmailRequest';
import PasswordCreate from './screens/Registration/PasswordCreate';
import RegIntro from './screens/Registration/IntroductionRequest';
import VerifyRequest from './screens/Registration/VerifyRequest';
import RegVerifyO from './screens/Registration/VerifyConfirm';
import RegInterests from './screens/Registration/RegInterests';


export default class App extends React.Component {
  render() {
    return (
      <RegInterests />
    );
  }
}
