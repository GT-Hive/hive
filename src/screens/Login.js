import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Toast from '../components/Toast';
import { actionCreators } from '../models/actions/session';
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
  outerContainer: {
    width: '100%',
    height: '100%'
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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.logoContainer}>
          <Text style={STYLES.TEXT_PRIMARY}>HIVE</Text>
          <Image style={styles.logo} source={images.logo} />
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.emailInput}
            onChangeText={email => this.setState({ email })}
            placeholder='Email ID'
            placeholderTextColor={COLORS.LIGHT_GRAY}
          />
          <TextInput
            style={styles.passwordInput}
            onChangeText={password => this.setState({ password })}
            placeholder='Password'
            placeholderTextColor={COLORS.LIGHT_GRAY}
            secureTextEntry
          />
          <Button
            style={styles.loginButton}
            onPress={() => this.props.loginUser(this.state.email, this.state.password)}
          >
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
        <Toast />
      </View>
    );
  }
}

const mapStateToProps = ({ session }) => session;

const mapDispatchToProps = {
  loginUser: actionCreators.loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
