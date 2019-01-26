import React from 'react';

import Login from './screens/Login';
import RegName from './screens/Registration/RegName';
import RegEmail from './screens/Registration/RegEmail';
import RegPass from './screens/Registration/RegPass';
import RegIntro from './screens/Registration/RegIntro';
import RegVerifyX from './screens/Registration/RegVerifyX';
import RegVerifyO from './screens/Registration/RegVerifyO';
import RegInterests from './screens/Registration/RegInterests';


export default class App extends React.Component {
  render() {
    return (
      <RegInterests />
    );
  }
}
