import Color from 'color';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { COLORS } from '../res';

export default class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    style: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
      PropTypes.array
    ]),
    onPress: PropTypes.func
  };

  static defaultProps = {
    style: {
      backgroundColor: 'transparent'
    },
    onPress: null,
    disabled: false
  }

  render() {
    const { children, disabled, style, onPress } = this.props;
    const {
      backgroundColor: baseColor,
      ...otherStyles
    } = style;

    let backgroundColor = baseColor;
    if (disabled) {
      backgroundColor = Color(baseColor).alpha(COLORS.DISABLED_ALPHA).toString();
    }
    const newStyle = { ...otherStyles, backgroundColor };

    if (disabled) {
      return (
        <View style={newStyle}>
          { children }
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={newStyle}
        onPress={onPress}
      >
        { children }
      </TouchableOpacity>
    );
  }
}
