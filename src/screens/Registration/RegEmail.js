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
  regEmailContainer: {
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
        <Text style={STYLES.DESC_TEXT_PRIMARY}>What's your email?</Text>
        <Text style={styles.DESC_TEXT_DESC}>This will be used for you to login and for us to contact you just in case!</Text>

        <View style={styles.regEmailContainer}>
          <TextInput
            style={styles.emailInput}
            underlineColorAndroid="rgba(88, 88, 88, 0.2)"
            placeholder='Email'
            autoFocus={true}
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
