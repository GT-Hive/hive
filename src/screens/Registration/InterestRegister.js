import _ from 'lodash';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import store from '../../models';
import { actionCreators } from '../../models/actions/user';
import { COLORS, STYLES } from '../../res';

const styles = StyleSheet.create({
  heading: {
    ...STYLES.TEXT_PRIMARY,
    marginBottom: 10,
    marginTop: 20
  },
  image: {
    marginRight: 8,
    maxHeight: 20
  },
  introContainer: {
    marginHorizontal: 30,
    marginBottom: 50
  },
  outerContainer: {
    width: '100%',
    height: '100%'
  },
  register: {
    ...STYLES.TEXT_SECONDARY,
    color: COLORS.WHITE
  },
  registerBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 30,
    marginTop: 60,
    borderRadius: 10,
    backgroundColor: COLORS.BLACK
  },
  registerBtnContainer: {
    justifyContent: 'flex-end',
    marginBottom: 30
  },
  tagBtn: {
    height: 46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 23,
    borderColor: COLORS.WHISPER,
    borderWidth: 2
  },
  tagBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20
  },
  tagText: {
    textAlign: 'center',
    fontSize: 18
  },
  touchable: {
    marginHorizontal: 4,
    marginBottom: 8
  }
});

// TODO(roy): Is TagButton accessed elsewhere? Move if so
// TODO(roy): Replace TouchableOpacity with custom button
class TagButton extends React.Component {
  render() {
    const { backgroundColor, onPress, color, title } = this.props;
    const buttonContainerStyle = { ...styles.tagBtn, backgroundColor };
    const textStyle = { ...styles.tagText, color };

    return (
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View style={buttonContainerStyle}>
          <Text style={textStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class InterestRegister extends React.Component {
  // TODO(roy): Remove dummy state values later
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      communities: ['Economics', '3D Modelling', 'Japanese', 'Media Studies',
        'Art', 'Artificial Intelligence', 'Computer Vision'],
      description: 'There are many communities for many topics.\n'
        + 'You can join more later as you find them!'
    };
  }

  _onPress = (community) => {
    const { selected } = this.state;
    if (selected.includes(community)) {
      this.setState({
        selected: _.pull(selected, community)
      });
    } else {
      this.setState({
        selected: _.concat(selected, community)
      });
    }
  }

  _makeButtons = () => {
    const tagButtonColor = { borderColor: COLORS.WHITE };
    return this.state.communities.map((community) => {
      if (this.state.selected.includes(community)) {
        tagButtonColor.backgroundColor = COLORS.BUZZ_GOLD;
        tagButtonColor.color = COLORS.WHITE;
      } else {
        tagButtonColor.backgroundColor = COLORS.NEAR_WHITE;
        tagButtonColor.color = COLORS.DIM_GRAY;
      }
      return (
        <TagButton
          {...tagButtonColor}
          onPress={() => this._onPress(community)}
          key={community}
          title={community}
        />
      );
    });
  }

  // TODO(roy): handle navigation when registration fails -> show toast and stay on current screen
  // TODO(roy): views should only be responsible for views. move navigation logics to controller
  _registerUser = () => {
    const { navigation, registerUser } = this.props;
    const resetStack = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });

    const { interests, ...userInfo } = store.getState().user;
    registerUser(userInfo, this.state.selected);
    navigation.dispatch(resetStack);
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.heading}>Select your interests</Text>
          <Text style={STYLES.TEXT_TERTIARY}>
            {this.state.description}
          </Text>
        </View>
        <View style={styles.tagBtnContainer}>
          {this._makeButtons()}
        </View>
        <View style={styles.registerBtnContainer}>
          <Button
            style={styles.registerBtn}
            onPress={this._registerUser}
          >
            <Text style={styles.register}>Register</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  registerUser: actionCreators.registerUser
};

export default connect(null, mapDispatchToProps)(InterestRegister);
