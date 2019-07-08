import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import SAFE_AREA_VIEW from '../../Constants';
import hasFieldsFilled from '../../common/Validation';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import { actionCreators as screenActionCreators } from '../../models/actions/screen';
import { actionCreators as userActionCreators } from '../../models/actions/user';
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

class UserInformationRequest extends React.Component {
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
    const { email, password } = this.state;
    const { navigation, registerInformation } = this.props;

    if (!this._isValidEmail()) {
      this.props.displayErrorToast('Email is not Valid Georgia Tech Email!');
      return;
    }
    if (this.state.password !== this.state.confirmPassword) {
      this.props.displayErrorToast('Password Does Not Match!');
      return;
    }
    registerInformation(email, password);
    navigation.navigate('Introduction');
  };

  render() {
    const { description } = this.state;
    return (
      <SafeAreaView style={SAFE_AREA_VIEW}>
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
          <Toast />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ screen }) => screen;

const mapDispatchToProps = {
  displayErrorToast: screenActionCreators.displayErrorToast,
  registerInformation: userActionCreators.registerInformation
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInformationRequest);
