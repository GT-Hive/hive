import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { COLORS, STYLES } from '../../Constants';
import IMAGES from '../../assets';
import Button from '../../components/Button';
import R from '../../res/R';
import { underline } from 'ansi-colors';

const styles = StyleSheet.create({
    descText: {
        marginTop: 120,
    },
  openMailBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLACK,
    minHeight: 40,
    width: '80%',
    marginTop: 100,
    marginBottom: 80,
    borderRadius: 10
  },
  openMailTxt: {
    ...STYLES.TEXT_SECONDARY,
    color: COLORS.WHITE
  },
  profile_img: {
      marginTop: 10
  },
});

export default class RegName extends React.Component {
  render() {
    return (
      <View style={[R.styles.CONTAINER_SIDES, styles.descText]}>
        <Text style={STYLES.DESC_TEXT_PRIMARY}>Thank you!</Text>
        <Text style={styles.DESC_TEXT_DESC}>Thanks for verifying your email!</Text>
        
        
        <View style={ STYLES.CONTAINER_CENTERX }>
            <Button style={styles.openMailBtn}>
                <Text style={styles.openMailTxt}>Find communities!</Text>
            </Button>
        </View>
         
      </View>
    );
  }
}
