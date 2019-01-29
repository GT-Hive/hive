import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../../components/Button';
import { COLORS, STYLES } from '../../res';

const styles = StyleSheet.create({
  heading: {
    ...STYLES.TEXT_PRIMARY,
    marginBottom: 10,
    marginTop: 20
  },
  introContainer: {
    marginHorizontal: 30,
    marginBottom: 50
  },
  openMail: {
    ...STYLES.TEXT_SECONDARY,
    color: COLORS.WHITE
  },
  openMailBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 30,
    marginTop: 60,
    borderRadius: 10,
    backgroundColor: COLORS.BLACK
  },
  outerContainer: {
    height: '100%',
    width: '100%'
  }
});

export default class VerifyRequest extends React.Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.heading}>Verify your email</Text>
          <Text style={STYLES.TEXT_TERTIARY}>Please verify your email before continuing.</Text>
        </View>
        <Button style={styles.openMailBtn}>
          <Text style={styles.openMail}>Open Mail App</Text>
        </Button>
      </View>
    );
  }
}
