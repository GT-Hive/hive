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
  heading: {
    ...STYLES.TEXT_PRIMARY,
    marginBottom: 10,
    marginTop: 20
  },
  introContainer: {
    marginHorizontal: 30,
    marginBottom: 50
  },
  outerContainer: {
    height: '100%',
    width: '100%'
  },
  pwd: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 0,
    paddingLeft: 20,
    minHeight: 40,
    borderColor: COLORS.WHISPER,
    backgroundColor: COLORS.WHISPER
  },
  regPwdContainer: {
    alignItems: 'center',
    marginHorizontal: 30
  }
});

export default class PasswordCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'Create a Password!',
      subheading: 'Password Requirements:\n' + '8 characters, one number, one special character'
    };
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.heading}>
            {this.state.heading}
          </Text>
          <Text style={STYLES.TEXT_TERTIARY}>
            {this.state.subheading}
          </Text>
        </View>
        <View style={styles.regPwdContainer}>
          <TextInput
            style={styles.pwd}
            placeholder='Password'
            placeholderTextColor={COLORS.LIGHT_GRAY}
          />
          <TextInput
            style={styles.confirmPwd}
            placeholder='Confirm Password'
            placeholderTextColor={COLORS.LIGHT_GRAY}
          />
        </View>
        <Button style={styles.continueBtn}>
          <Text style={styles.continue}>Continue</Text>
        </Button>
      </View>
    );
  }
}
