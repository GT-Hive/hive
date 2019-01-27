import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import R from '../res/R';
import Button from '../components/Button';

const styles = StyleSheet.create({
  emailInput: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 0,
    paddingLeft: 20,
    minHeight: 40,
    borderColor: R.colors.GRAY,
    backgroundColor: R.colors.GRAY
  },
  forgot: R.styles.TEXT_SECONDARY,
  forgotButton: {
    marginTop: 10
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.colors.BLACK,
    minHeight: 40,
    width: '80%',
    marginTop: 30,
    borderRadius: 10
  },
  login: {
    ...R.styles.TEXT_SECONDARY,
    color: R.colors.WHITE
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
  pwdInput: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 0,
    paddingLeft: 20,
    minHeight: 40,
    borderColor: R.colors.GRAY,
    backgroundColor: R.colors.GRAY,
    marginTop: 10
  }
});

export default class Login extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.logoContainer}>
          <Text style={R.styles.TEXT_PRIMARY}>HIVE</Text>
          <Image style={styles.logo} source={R.images.logo} />
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.emailInput}
            placeholder='Email ID'
            placeholderTextColor={R.colors.LIGHT_GRAY}
          />
          <TextInput
            style={styles.pwdInput}
            placeholder='Password'
            placeholderTextColor={R.colors.LIGHT_GRAY}
          />
          <Button style={styles.loginButton}>
            <Text style={styles.login}>Login</Text>
          </Button>
          <Button style={styles.forgotButton}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </Button>
        </View>
      </View>
    );
  }
}
