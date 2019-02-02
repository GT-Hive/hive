import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Button from '../../components/Button';
import { COLORS, STYLES } from '../../res';

const styles = StyleSheet.create({
  confirmPwd: {
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

export default class EmailRequest extends React.Component {
  // TODO(roy): Replace Description text
  constructor(props) {
    super(props);
    this.state = {
      description: {
        login: 'Your email will be used to log in.',
        password: 'Password Requirements:\n' + '8 characters, one number, one special character'
      }
    };
  }

  render() {
    const { description } = this.state;
    return (
      <View style={styles.outerContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.heading}>Tell us about you</Text>
          <Text style={styles.login}>
            { description.login }
          </Text>
          <Text style={styles.password}>
            { description.password }
          </Text>
        </View>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Email'
            placeholderTextColor={COLORS.LIGHT_GRAY}
            autoFocus
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Password'
            placeholderTextColor={COLORS.LIGHT_GRAY}
            secureTextEntry
          />
          <TextInput
            style={styles.confirmPwd}
            placeholder='Confirm Password'
            placeholderTextColor={COLORS.LIGHT_GRAY}
            secureTextEntry
          />
        </View>
        <Button
          style={styles.continueBtn}
          onPress={() => this.props.navigation.navigate('Introduction')}
        >
          <Text style={styles.continue}>Continue</Text>
        </Button>
      </View>
    );
  }
}
