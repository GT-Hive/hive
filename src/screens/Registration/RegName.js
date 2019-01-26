import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { COLORS, STYLES } from '../../Constants';
import IMAGES from '../../assets';
import Button from '../../components/Button';
import { underline } from 'ansi-colors';

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
    backgroundColor: COLORS.BLACK,
    minHeight: 40,
    width: '80%',
    marginBottom: 30,
    borderRadius: 10
  },
  continueTxt: {
    ...STYLES.TEXT_SECONDARY,
    color: COLORS.WHITE
  },
});

export default class RegName extends React.Component {
  render() {
    return (
      <View style={[STYLES.CONTAINER_SIDES, STYLES.CONTAINER_REG_FIXED, STYLES.CONTAINER_FLEX_VERT]}>
        <Text style={STYLES.DESC_TEXT_PRIMARY}>What's your name?</Text>
        <Text style={styles.DESC_TEXT_DESC}>Let us get to know you! (Replace this text)</Text>

        <View style={styles.regNameContainer}>
          <TextInput
            style={styles.firstNameInput}
            underlineColorAndroid="rgba(88, 88, 88, 0.2)"
            placeholder='First Name'
            autoFocus={true}
            placeholderTextColor={COLORS.LIGHT_GRAY}
          />
          <TextInput
            style={styles.lastNameInput}
            underlineColorAndroid="rgba(88, 88, 88, 0.2)"
            placeholder='Last Name'
            placeholderTextColor={COLORS.LIGHT_GRAY}
          />
        </View>

        <View style={ STYLES.CONTAINER_CENTERX }>
            <Button style={styles.continueBtn}>
                <Text style={styles.continueTxt}>Continue</Text>
            </Button>
        </View>
         
      </View>
    );
  }
}
