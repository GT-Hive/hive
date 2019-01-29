import _ from 'lodash';
import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { COLORS, images } from '../../res';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20
  },
  image: {
    marginRight: 8,
    maxHeight: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 18
  },
  touchable: {
    marginHorizontal: 4,
    marginBottom: 8
  },
  view: {
    height: 46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 23,
    borderColor: COLORS.WHISPER,
    borderWidth: 2
  }
});

// TODO(roy): Is TagButton accessed elsewhere? Move if so
// TODO(roy): Replace TouchableOpacity with custom button
class TagButton extends React.Component {
  render() {
    const { backgroundColor, onPress, color, title } = this.props;
    const buttonContainerStyle = { ...styles.view, backgroundColor };
    const textStyle = { ...styles.text, color };

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
    return (
      <View style={styles.container}>
        {this._makeButtons()}
      </View>
    );
  }
}
