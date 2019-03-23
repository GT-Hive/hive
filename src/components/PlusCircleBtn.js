import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../res';

const styles = StyleSheet.create({
  floatingBtn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 70,
    backgroundColor: COLORS.NEAR_BLACK,
    borderRadius: 100,
  }
});

export default class PlusCircleBtn extends React.Component {
  render() {
    return (
      <TouchableOpacity
        // onPress={() => this._onPress()}
        style={styles.floatingBtn}
      >
        <Icon name="md-add" size={30} color="#fff" />
      </TouchableOpacity>
    );
  }
}
