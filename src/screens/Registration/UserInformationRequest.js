import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';

import hasFieldsFilled from '../../common/Validation';
import Button from '../../components/Button';
import { COLORS, STYLES } from '../../res';

const styles = StyleSheet.create({
  confirmPassword: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 0,
    paddingLeft: 20,
    height: 40,
    borderColor: COLORS.WHISPER,
    backgroundColor: COLORS.WHISPER,
    marginTop: 10
  },
  continue: {
    ...STYLES.TEXT_SECONDARY,
    color: COLORS.WHITE
  },
  continueBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 30,
    marginTop: 60,
    borderRadius: 10,
    backgroundColor: COLORS.BLACK
  },
  emailContainer: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 20
  },
  heading: {
    ...STYLES.TEXT_PRIMARY,
    marginBottom: 10,
    marginTop: 20
  },
  introContainer: {
    marginHorizontal: 30,
    marginBottom: 50
  },
  login: STYLES.TEXT_TERTIARY,
  outerContainer: {
    height: '100%',
    width: '100%',
    flex: 1
  },
  password: {
    ...STYLES.TEXT_TERTIARY,
    marginTop: 10
  },
  passwordContainer: {
    alignItems: 'center',
    marginHorizontal: 30
  },
  textInput: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 0,
    paddingLeft: 20,
    minHeight: 40,
    borderColor: COLORS.WHISPER,
    backgroundColor: COLORS.WHISPER
  }
});

const toastStyle = {
  style: {
    backgroundColor: COLORS.DARK_PINK,
    borderRadius: 8,
    paddingHorizontal: 10
  },
  textStyle: {
    fontSize: 10,
    color: COLORS.WHITE,
    fontWeight: 'bold'
  },
  opacity: 0.7,
  positionValue: 425
};

export default class UserInformationRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: {
        login: 'Your Georgia Tech Email will be used to log in.',
        password: 'Password Requirements:\n' + '8 characters, one number, one special character'
      },
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  _renderPasswordText = () => {
    if (this.state.password === '' || this._isStrongPassword(this.state.password)) {
      return styles.password;
    }
    return {
      ...styles.password,
      color: COLORS.DARK_PINK,
      fontWeight: 'bold'
    };
  }

  _isStrongPassword = () => {
    const { password } = this.state;
    const specialCharEx = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const numberEx = /\d/;
    return specialCharEx.test(password) && numberEx.test(password) && password.length >= 8;
  }

  _isValidEmail = () => {
    const emailEx = new RegExp(["^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]",
      '{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'].join(''));
    return emailEx.test(this.state.email) && this.state.email.includes('@gatech.edu');
  }

  _validateFieldsAndContinue = () => {
    if (!this._isValidEmail()) {
      this.toast.show('Email is not Valid Georgia Tech Email!', DURATION.LENGTH_LONG);
      return;
    }
    if (this.state.password !== this.state.confirmPassword) {
      this.toast.show('Password Does Not Match!', DURATION.LENGTH_LONG);
      return;
    }

    this.props.navigation.navigate('Introduction');
  };

  render() {
    const { description } = this.state;
    return (
      <View style={styles.outerContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.heading}>Tell us about you</Text>
          <Text style={styles.login}>
            { description.login }
          </Text>
          <Text style={this._renderPasswordText()}>
            { description.password }
          </Text>
        </View>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={email => this.setState({ email })}
            placeholder='Georgia Tech Email'
            placeholderTextColor={COLORS.LIGHT_GRAY}
            autoFocus
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            placeholder='Password'
            placeholderTextColor={COLORS.LIGHT_GRAY}
            secureTextEntry
          />
          <TextInput
            style={styles.confirmPassword}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            placeholder='Confirm Password'
            placeholderTextColor={COLORS.LIGHT_GRAY}
            secureTextEntry
          />
        </View>
        <Button
          disabled={
            !hasFieldsFilled([this.state.email, this.state.password])
            || !this._isStrongPassword()
          }
          style={styles.continueBtn}
          onPress={this._validateFieldsAndContinue}
        >
          <Text style={styles.continue}>Continue</Text>
        </Button>
        <Toast
          {...toastStyle}
          ref={(ref) => { this.toast = ref; }}
        />
      </View>
    );
  }
}
