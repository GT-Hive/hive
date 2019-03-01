import _ from 'lodash';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import { actionCreators as communityActionCreators } from '../../models/actions/community';
import { actionCreators as userActionCreators } from '../../models/actions/user';
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

class CommunitiesRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      description: 'There are many communities for many topics.\n'
        + 'You can join more later as you find them!'
    };
  }

  componentDidMount() {
    this.props.reloadCommunities();
  }

  _onPress = (communityId) => {
    const { selected } = this.state;
    if (selected.includes(communityId)) {
      this.setState({
        selected: _.pull(selected, communityId)
      });
    } else {
      this.setState({
        selected: _.concat(selected, communityId)
      });
    }
  }

  _makeButtons = () => {
    const tagButtonColor = { borderColor: COLORS.WHITE };
    const { communities } = this.props;
    return communities.map((community) => {
      const communityId = community.id;
      if (this.state.selected.includes(communityId)) {
        tagButtonColor.backgroundColor = COLORS.BUZZ_GOLD;
        tagButtonColor.color = COLORS.WHITE;
      } else {
        tagButtonColor.backgroundColor = COLORS.NEAR_WHITE;
        tagButtonColor.color = COLORS.DIM_GRAY;
      }
      return (
        <TagButton
          {...tagButtonColor}
          onPress={() => this._onPress(communityId)}
          key={community.id}
          title={community.name}
        />
      );
    });
  }

  // TODO(roy): handle navigation when registration fails -> show toast and stay on current screen
  // TODO(roy): Find ways to change {communities ? this._makeButtons() : null}
  render() {
    const { communities, createUser, userInfo } = this.props;
    return (
      <ScrollView>
        <View style={styles.outerContainer}>
          <View style={styles.introContainer}>
            <Text style={styles.heading}>Select Your Communities</Text>
            <Text style={STYLES.TEXT_TERTIARY}>
              {this.state.description}
            </Text>
          </View>
          <View style={styles.tagBtnContainer}>
            {communities ? this._makeButtons() : null}
          </View>
          <View style={styles.registerBtnContainer}>
            <Button
              style={styles.registerBtn}
              onPress={() => createUser(userInfo, this.state.selected)}
            >
              <Text style={styles.register}>Register</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ community, user }) => {
  const { communities: userCommunities, ...userInfo } = user;
  const { communities: allCommunities } = community.communities;

  return {
    communities: allCommunities,
    userInfo
  };
};

const mapDispatchToProps = {
  createUser: userActionCreators.createUser,
  reloadCommunities: communityActionCreators.reloadCommunities
};

export default connect(mapStateToProps, mapDispatchToProps)(CommunitiesRegister);
