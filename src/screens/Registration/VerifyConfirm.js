import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS, STYLES } from '../../Constants';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  complete: {
    ...STYLES.TEXT_SECONDARY,
    color: COLORS.WHITE
  },
  completeBtn: {
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
  }
});

export default class VerifyConfirm extends React.Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.heading}>Thank you!</Text>
          <Text style={STYLES.TEXT_TERTIARY}>Thanks for verifying your email!</Text>
        </View>
        <Button style={styles.completeBtn}>
          <Text style={styles.complete}>Complete Registration</Text>
        </Button>
      </View>
    );
  }
}
