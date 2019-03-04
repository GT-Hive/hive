import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import Toast from '../components/Toast';
import Button from '../components/Button';
import { COLORS, STYLES } from '../res';

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

export default class ForgotConfirm extends React.Component {
  // TODO(roy): resetStack should be in an epic controller. Remove once calls to API is handled
  render() {
    const resetStack = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });

    return (
      <View style={styles.outerContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.heading}>Email Sent!</Text>
          <Text style={STYLES.TEXT_TERTIARY}>We sent you a recovery email!</Text>
        </View>
        <Button
          style={styles.completeBtn}
          onPress={() => this.props.navigation.dispatch(resetStack)}
        >
          <Text style={styles.complete}>Return to Login</Text>
        </Button>
      </View>
    );
  }
}
