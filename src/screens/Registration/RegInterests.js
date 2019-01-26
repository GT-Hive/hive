import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { COLORS, STYLES } from '../../Constants';
import IMAGES from '../../assets';
import Button from '../../components/Button';
import { underline } from 'ansi-colors';

const styles = StyleSheet.create({
    interestsContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    joinBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.BLACK,
        minHeight: 40,
        width: '80%',
        borderRadius: 10
    },
    joinTxt: {
        ...STYLES.TEXT_SECONDARY,
        color: COLORS.WHITE
    },
    communityContainer: {
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        flexGrow: 1
    },
    communityBtn: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: COLORS.LIGHT_GRAY,
        // minHeight: 10,
        // flexWrap: 'nowrap',
        // borderRadius: 20
    }
});

export default class RegName extends React.Component {
  render() {
    return (
      <View style={[STYLES.CONTAINER_SIDES, styles.interestsContainer]}>
        <Text style={STYLES.DESC_TEXT_PRIMARY}>Select your interests</Text>
        <Text style={styles.DESC_TEXT_DESC}>There are communities for many topics {"\n"}You can join more later when you think of them!</Text>
        

        <View style={styles.communityContainer}>
            <Button style={styles.communityBtn}>
                <Text style={styles.joinTxt}>Korean</Text>
            </Button>
        </View>

        <View style={ STYLES.CONTAINER_CENTERX }>
            <Button style={styles.joinBtn}>
                <Text style={styles.joinTxt}>Join communities!</Text>
            </Button>
        </View>
      </View>
    );
  }
}
