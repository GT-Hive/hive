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
    height: 70,
    position: 'absolute',
    bottom: 100,
    right: 30,
    backgroundColor: COLORS.NEAR_BLACK,
    borderRadius: 100,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: COLORS.DIM_GRAY,
    shadowOpacity: 1.0,
  }
});

export default class PlusCircleBtn extends React.Component {
  render() {
    return (
      <TouchableOpacity
        // onPress={() => this._onPress()}
        style={styles.floatingBtn}
      >
        <Icon name="md-add" size={30} color={COLORS.WHITE} />
      </TouchableOpacity>
    );
  }
}
