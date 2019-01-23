import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { COLORS, STYLES } from '../Constants';
import IMAGES from '../assets';
import Button from '../components/Button';

const styles = StyleSheet.create({
  emailInput: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 0,
    paddingLeft: 20,
    minHeight: 40,
    borderColor: COLORS.GRAY,
    backgroundColor: COLORS.GRAY
  },
  forgot: STYLES.TEXT_SECONDARY,
  forgotButton: {
    marginTop: 10
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
  login: {
    ...STYLES.TEXT_SECONDARY,
    color: COLORS.WHITE
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
    borderColor: COLORS.GRAY,
    backgroundColor: COLORS.GRAY,
    marginTop: 10
  }
});

export default class Login extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.logoContainer}>
          <Text style={STYLES.TEXT_PRIMARY}>HIVE</Text>
          <Image style={styles.logo} source={IMAGES.canvas} />
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.emailInput}
            placeholder='Email ID'
            placeholderTextColor={COLORS.LIGHT_GRAY}
          />
          <TextInput
            style={styles.pwdInput}
            placeholder='Password'
            placeholderTextColor={COLORS.LIGHT_GRAY}
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
