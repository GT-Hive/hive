import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import { actionCreators as communityActionCreators } from '../../models/actions/community';
import { COLORS, STYLES } from '../../res';
import PlusCircleBtn from '../../components/PlusCircleBtn';

const styles = StyleSheet.create({
  profileImg: {
    ...STYLES.PROFILE_IMG,
    marginRight: 20,
  },
  listContainer: {
    marginHorizontal: 50,
    marginBottom: 20,
  },
  listBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GRAY,
    paddingVertical: 35,
    paddingHorizontal: 25,
    height: 40,
  },
  listText: {
    ...STYLES.TEXT_TERTIARY,
    color: COLORS.BLACK,
  },
  listImg: {
    marginRight: 25,
    width: 40,
    height: 40,
  },
});

class CommunitiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.reloadCommunities();
  }

  render() {
    const { communities, userInfo } = this.props;

    return (
      <View style={STYLES.OUTER_CONTAINER}>
        <View style={STYLES.HEADER_CONTAINER}>
          <Image
            style={styles.profileImg}
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          />
          <Text style={STYLES.TEXT_HEADING}>Communities</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={communities}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <Button
                  style={styles.listBtn}
                // onPress={() => this.props.navigation.dispatch(resetStack)}
                >
                  <Image
                    style={styles.listImg}
                    source={{ uri: item.img_url }}
                  />
                  <Text style={styles.listText}>{item.name}</Text>
                </Button>
              );
            }}
          />
        </View>
        <PlusCircleBtn />
      </View>
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
  reloadCommunities: communityActionCreators.reloadCommunities
};

export default connect(mapStateToProps, mapDispatchToProps)(CommunitiesList);
