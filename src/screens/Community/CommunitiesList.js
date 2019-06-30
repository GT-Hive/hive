import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import SAFE_AREA_VIEW from '../../Constants';
import Button from '../../components/Button';
import PlusCircleBtn from '../../components/PlusCircleBtn';
import { actionCreators } from '../../models/actions/community';
import { COLORS, STYLES, images } from '../../res';

const styles = StyleSheet.create({
  border: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GRAY,
  },
  heading: STYLES.TEXT_SECONDARY,
  listBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 35,
    paddingHorizontal: 25,
    height: 100,
  },
  listContainer: {
    marginHorizontal: 30,
    flex: 1
  },
  listImg: {
    marginRight: 25,
    width: 40,
    height: 40,
  },
  listText: {
    ...STYLES.TEXT_TERTIARY,
    color: COLORS.BLACK,
  },
  profileImg: {
    ...STYLES.PROFILE_IMG,
    marginRight: 20,
  },
  shadowBorder: {
    height: 0.5,
    borderWidth: 0.5,
    shadowRadius: 1,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: COLORS.DIM_GRAY,
    shadowOpacity: 1.0,
  },
});

class CommunitiesList extends React.Component {
  constructor(props) {
    super(props);
    this.props.reloadCommunities();
  }

  render() {
    const { communities, navigation } = this.props;

    const actions = [{
      text: 'Join a New Community',
      onPress: () => navigation.navigate('CommunityAdd')
    }, {
      text: 'Create a New Community',
      onPress: () => navigation.navigate('CommunityCreate')
    }];

    return (
      <SafeAreaView style={SAFE_AREA_VIEW}>
        <View style={STYLES.HEADER_CONTAINER}>
          <Image
            style={styles.profileImg}
            source={images.logo}
          />
          <Text style={styles.heading}>Communities</Text>
        </View>
        <View style={styles.shadowBorder} />
        <View style={styles.listContainer}>
          <FlatList
            data={communities}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <View>
                  <Button
                    style={styles.listBtn}
                  >
                    <Image
                      style={styles.listImg}
                      source={{ uri: item.img_url }}
                    />
                    <Text style={styles.listText}>{item.name}</Text>
                  </Button>
                  <View style={styles.border} />
                </View>
              );
            }}
          />
        </View>
        <PlusCircleBtn actions={actions} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ community }) => {
  const { communities } = community.communities;
  const { showScreen } = community;

  return {
    communities,
    showScreen
  };
};

const mapDispatchToProps = {
  reloadCommunities: actionCreators.reloadCommunities
};

export default connect(mapStateToProps, mapDispatchToProps)(CommunitiesList);
