import React, { Component } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import { actionCreators } from '../models/actions/screen';
import { COLORS } from '../res';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    backgroundColor: COLORS.DARK_PINK
  },
  messageContainer: {
    backgroundColor: COLORS.LIGHT_GREEN,
    borderRadius: 20,
    marginHorizontal: 20,
    overflow: 'hidden',
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  shadow: {
    elevation: 10,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 5
  },
  warning: {
    backgroundColor: COLORS.YELLOW
  }
});

class Toast extends Component {
  state = {
    fadeAnimation: new Animated.Value(0),
    shadowOpacity: new Animated.Value(0),
    present: false,
    message: '',
    dismissTimeout: null
  };

  // TODO(roy): following life cycle deprecated -> change to componentDidUpdate
  //            or getDerivedStateFromProps
  componentWillReceiveProps({ message, error, duration, warning }) {
    if (message) {
      const dismissTimeout = setTimeout(() => {
        this.props.hideToast();
      }, duration);
      clearTimeout(this.state.dismissTimeout);
      this.show(message, { error, warning, dismissTimeout });
    } else {
      this.hide();
    }
  }

  show(message, { error, warning, dismissTimeout }) {
    this.setState(
      {
        present: true,
        fadeAnimation: new Animated.Value(0),
        shadowOpacity: new Animated.Value(0),
        message,
        error,
        warning,
        dismissTimeout
      },
      () => {
        Animated.timing(this.state.fadeAnimation, { toValue: 1 }).start();
        Animated.timing(this.state.shadowOpacity, { toValue: 0.5 }).start();
      }
    );
  }

  hide() {
    Animated.timing(this.state.shadowOpacity, { toValue: 0 }).start();
    Animated.timing(this.state.fadeAnimation, { toValue: 0 }).start(() => {
      this.setState({
        present: false,
        message: null,
        error: false,
        warning: false,
        dismissTimeout: null
      });
    });
  }

  render() {
    if (!this.state.present) {
      return null;
    }

    const messageStyles = [styles.messageContainer, this.props.containerStyle];
    if (this.state.error) {
      messageStyles.push(styles.error, this.props.errorStyle);
    } else if (this.state.warning) {
      messageStyles.push(styles.warning, this.props.warningStyle);
    }
    return (
      <Animated.View
        style={[
          styles.shadow,
          styles.container,
          { opacity: this.state.fadeAnimation, shadowOpacity: this.state.shadowOpacity }
        ]}
      >
        <View style={messageStyles}>
          {this.props.getMessageComponent(this.state.message, {
            error: this.state.error,
            warning: this.state.warning
          })}
        </View>
      </Animated.View>
    );
  }
}

Toast.defaultProps = {
  getMessageComponent(message) {
    return (
      <Text style={{ color: COLORS.WHITE }}>
        {message}
      </Text>
    );
  }
};

const mapDispatchToProps = {
  hideToast: actionCreators.hideToast
};

const mapStateToProps = ({ screen }) => screen;

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
