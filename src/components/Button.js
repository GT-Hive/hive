import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
      PropTypes.array
    ]),
    onPress: PropTypes.func
  };

  static defaultProps = {
    style: null,
    onPress: null
  }

  render() {
    const { children, style, onPress } = this.props;
    return (
      <TouchableOpacity
        style={style}
        onPress={onPress}
      >
        { children }
      </TouchableOpacity>
    );
  }
}
