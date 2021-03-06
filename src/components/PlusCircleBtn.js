import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-navigation';

import SAFE_AREA_VIEW from '../Constants';
import { COLORS } from '../res';
import Button from './Button';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    position: 'absolute',
    right: 20,
    bottom: 35
  },
  expandedOuterContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.WHITE
  },
  floatingBtn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: COLORS.NEAR_BLACK,
    borderRadius: 100,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: COLORS.DIM_GRAY,
    shadowOpacity: 1.0
  },
  floatingBtnWithoutShadow: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: COLORS.NEAR_BLACK,
    borderRadius: 100,
  },
  option: {
    fontWeight: 'bold'
  },
  optionContainer: {
    width: 200,
    marginBottom: 20,
    backgroundColor: COLORS.WHITE,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1
  },
  optionOuterContainer: {
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
    shadowColor: COLORS.DIM_GRAY,
    shadowOpacity: 1.0
  }
});

export default class PlusCircleBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  _onPress = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  _renderContents = (actions) => {
    if (!actions) return null;
    return (
      actions.map((action) => {
        return (
          <View key={action.text} style={styles.optionOuterContainer}>
            <Button style={styles.optionContainer} onPress={action.onPress}>
              <Text style={styles.option}>{action.text}</Text>
            </Button>
          </View>
        );
      })
    );
  }

  render() {
    const { actions } = this.props;

    if (this.state.isExpanded) {
      return (
        <SafeAreaView style={SAFE_AREA_VIEW}>
          <View style={styles.expandedOuterContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => this._onPress()}
                style={styles.floatingBtnWithoutShadow}
              >
                <Icon name="md-add" size={30} color={COLORS.WHITE} />
              </TouchableOpacity>
              {this._renderContents(actions)}
            </View>
          </View>
        </SafeAreaView>
      );
    }
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => this._onPress()}
          style={styles.floatingBtn}
        >
          <Icon name="md-add" size={30} color={COLORS.WHITE} />
        </TouchableOpacity>
      </View>
    );
  }
}
