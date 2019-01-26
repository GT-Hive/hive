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
  regDescContainer: {
    marginTop: 0,
    marginBottom: 10,
    width: '100%'
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
  profile_img: {
      marginTop: 10
  },
  userDesc: {

  }
});

export default class RegName extends React.Component {
  render() {
    return (
      <View style={[STYLES.CONTAINER_SIDES, STYLES.CONTAINER_REG_FIXED, STYLES.CONTAINER_FLEX_VERT]}>
        <Text style={STYLES.DESC_TEXT_PRIMARY}>Introduce yourself!</Text>
        <Text style={styles.DESC_TEXT_DESC}>Set a nice profile picture and describe yourself in a few words.</Text>
        
        
        <View style={ STYLES.CONTAINER_CENTERX }>
            <Image style={[STYLES.PROFILE_IMG, styles.profile_img]} source={IMAGES.canvas} />

            <View style={styles.regDescContainer}>
                <TextInput
                    style={styles.userDesc}
                    multiline = {true}
                    numberOfLines = {4}
                    maxLength={200}

                    underlineColorAndroid="rgba(88, 88, 88, 0.2)"
                    placeholder='Describe yourself in a few words!'
                    autoFocus={true}
                    placeholderTextColor={COLORS.LIGHT_GRAY}
                />
            </View>

            <Button style={styles.continueBtn}>
                <Text style={styles.continueTxt}>Continue</Text>
            </Button>
        </View>
         
      </View>
    );
  }
}
