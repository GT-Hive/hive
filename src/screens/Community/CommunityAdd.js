import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import SAFE_AREA_VIEW from '../../Constants';
import Button from '../../components/Button';
import { COLORS, STYLES, images } from '../../res';

const styles = StyleSheet.create({
  border: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GRAY,
  },
  community: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  heading: STYLES.TEXT_SECONDARY,
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10
  },
  listBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 35,
    paddingHorizontal: 25,
    height: 100,
  },
  listContainer: {
    marginHorizontal: 30,
    marginBottom: 20,
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

class CommunityAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      additionalCommunities: []
    };
  }

  _renderCommunityButton = (item) => {
    const isAdded = this.state.additionalCommunities.includes(item.id);
    if (isAdded) return null;
    return (
      <View>
        <Button
          style={styles.listBtn}
          onPress={() => {
            const userCommunities = this.state.additionalCommunities;
            userCommunities.push(item.id);
            this.setState({ additionalCommunities: userCommunities });
          }}
        >
          <View style={styles.community}>
            <Image
              style={styles.listImg}
              source={{ uri: item.img_url }}
            />
            <Text style={styles.listText}>{item.name}</Text>
          </View>
          <SvgUri source={images.plus} />
        </Button>
        <View style={styles.border} />
      </View>
    );
  }

  _renderCommunities = () => {
    const { communities } = this.props;
    return (
      <View style={STYLES.OUTER_CONTAINER}>
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.profileImg}
              source={images.logo}
            />
            <Text style={STYLES.heading}>Join Communities</Text>
          </View>
          <Button
            onPress={() => this.props.navigation.navigate('CommunitiesList')}
          >
            <SvgUri source={images.check} fill={COLORS.BLACK} />
          </Button>
        </View>
        <View style={styles.shadowBorder} />
        <View style={styles.listContainer}>
          <FlatList
            data={communities}
            extraData={this.state}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => this._renderCommunityButton(item)}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={SAFE_AREA_VIEW}>
        {this._renderCommunities()}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ community }) => {
  const { communities } = community.communities;

  return {
    communities
  };
};

export default connect(mapStateToProps, null)(CommunityAdd);
