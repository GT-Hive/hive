import _ from 'lodash';
import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

import Button from '../../components/Button';
import { COLORS, images, STYLES } from '../../res';

const styles = StyleSheet.create({
  continue: {
    ...STYLES.TEXT_SECONDARY,
    color: COLORS.WHITE
  },
  continueBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 30,
    marginTop: 60,
    borderRadius: 10,
    backgroundColor: COLORS.BLACK
  },
  continueBtnContainer: {
    justifyContent: 'flex-end',
    marginBottom: 30
  },
  image: {
    marginRight: 8,
    maxHeight: 20
  },
  outerContainer: {
    width: '100%',
    height: '100%'
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
    padding: 20
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
          {
            this.props.showImage
              ? <Image style={styles.image} source={images.check} />
              : null
          }
          <Text style={textStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class InterestRegister extends React.Component {
  // TODO(roy): Remove dummy state values later
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      communities: ['Economics', '3D Modelling', 'Japanese', 'Media Studies',
        'Art', 'Artificial Intelligence', 'Computer Vision']
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

  _makeButtons() {
    const tagButtonColor = { borderColor: COLORS.WHITE };
    return this.state.communities.map((community) => {
      if (this.state.selected.includes(community)) {
        tagButtonColor.backgroundColor = COLORS.WHISPER;
        tagButtonColor.color = COLORS.BLACK;
        tagButtonColor.showImage = true;
      } else {
        tagButtonColor.backgroundColor = COLORS.NEAR_WHITE;
        tagButtonColor.color = COLORS.DIM_GRAY;
        tagButtonColor.showImage = false;
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

  render() {
    // TODO(roy): resetStack should be in an epic controller. Remove once calls to API is handled
    const resetStack = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });

    return (
      <View style={styles.outerContainer}>
        <View style={styles.tagBtnContainer}>
          {this._makeButtons()}
        </View>
        <View style={styles.continueBtnContainer}>
          <Button
            style={styles.continueBtn}
            onPress={() => this.props.navigation.dispatch(resetStack)}
          >
            <Text style={styles.continue}>Continue</Text>
          </Button>
        </View>
      </View>
    );
  }
}
