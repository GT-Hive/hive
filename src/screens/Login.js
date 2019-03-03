import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import Button from '../components/Button';
import { COLORS, images, STYLES } from '../res';

const styles = StyleSheet.create({
  emailInput: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 0,
    paddingLeft: 20,
    minHeight: 40,
    borderColor: COLORS.WHISPER,
    backgroundColor: COLORS.WHISPER
  },
  forgot: STYLES.TEXT_QUATERNARY,
  forgotButton: {
    marginTop: 10
  },
  forgotRegisterContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  login: {
    ...STYLES.TEXT_SECONDARY,
    color: COLORS.WHITE
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLACK,
    minHeight: 40,
    width: '80%',
    marginTop: 30,
    borderRadius: 10
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  logo: {
    width: 80,
    height: 80
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 132
  },
  passwordInput: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 0,
    paddingLeft: 20,
    minHeight: 40,
    borderColor: COLORS.WHISPER,
    backgroundColor: COLORS.WHISPER,
    marginTop: 10
  },
  registerButton: {
    marginTop: 10,
    marginLeft: 10
  }
});

export default class Login extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.logoContainer}>
          <Text style={STYLES.TEXT_PRIMARY}>HIVE</Text>
          <Image style={styles.logo} source={images.logo} />
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.emailInput}
            placeholder='Email ID'
            placeholderTextColor={COLORS.LIGHT_GRAY}
          />
          <TextInput
            style={styles.passwordInput}
            placeholder='Password'
            placeholderTextColor={COLORS.LIGHT_GRAY}
            secureTextEntry
          />
          <Button style={styles.loginButton}>
            <Text style={styles.login}>Login</Text>
          </Button>
        </View>
        <View style={styles.forgotRegisterContainer}>
          <Button
            style={styles.forgotButton}
            onPress={() => this.props.navigation.navigate('ForgotRequest')}
          >
            <Text style={styles.forgot}>Forgot Password?</Text>
          </Button>
          <Button
            style={styles.registerButton}
            onPress={() => this.props.navigation.navigate('Name')}
          >
            <Text style={styles.forgot}>Register Here</Text>
          </Button>
        </View>
      </View>
    );
  }
}
