import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { COLORS, STYLES } from '../../Constants';
import Button from '../../components/Button';

const styles = StyleSheet.create({
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
  email: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 0,
    paddingLeft: 20,
    minHeight: 40,
    borderColor: COLORS.GRAY,
    backgroundColor: COLORS.GRAY
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
  regEmailContainer: {
    alignItems: 'center',
    marginHorizontal: 30
  }
});

export default class EmailRequest extends React.Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.heading}>What's your email?</Text>
          <Text style={styles.TEXT_TERTIARY}>
            This will be used for you to login and for us to contact you just in case!
          </Text>
        </View>
        <View style={styles.regEmailContainer}>
          <TextInput
            style={styles.email}
            placeholder='Email'
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
