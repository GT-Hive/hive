import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import R from '../../res/R'
import Button from '../../components/Button';

const styles = StyleSheet.create({
  descriptionContainer: {
    margin: 0,
  },
  regNameContainer: {
    marginTop: 50,
    marginBottom: 60
  },
  continueBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.colors.BLACK,
    minHeight: 40,
    width: '80%',
    marginBottom: 30,
    borderRadius: 10
  },
  continueTxt: {
    ...R.styles.TEXT_SECONDARY,
    color: R.colors.WHITE
  },
});

export default class RegName extends React.Component {
  render() {
    return (
      <View style={[R.styles.CONTAINER_SIDES, R.styles.CONTAINER_REG_FIXED, R.styles.CONTAINER_FLEX_VERT]}>
        <Text style={R.styles.DESC_TEXT_PRIMARY}>What's your name?</Text>
        <Text style={R.styles.DESC_TEXT_DESC}>Let us get to know you! (Replace this text)</Text>

        <View style={R.styles.regNameContainer}>
          <TextInput
            style={R.styles.firstNameInput}
            underlineColorAndroid="rgba(88, 88, 88, 0.2)"
            placeholder='First Name'
            autoFocus={true}
            placeholderTextColor={R.colors.LIGHT_GRAY}
          />
          <TextInput
            style={R.styles.lastNameInput}
            underlineColorAndroid="rgba(88, 88, 88, 0.2)"
            placeholder='Last Name'
            placeholderTextColor={R.colors.LIGHT_GRAY}
          />
        </View>

        <View style={ R.styles.CONTAINER_CENTERX }>
            <Button style={R.styles.continueBtn}>
                <Text style={R.styles.continueTxt}>Continue</Text>
            </Button>
        </View>
         
      </View>
    );
  }
}
