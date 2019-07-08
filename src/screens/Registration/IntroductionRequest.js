import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import SAFE_AREA_VIEW from '../../Constants';
import Button from '../../components/Button';
import { actionCreators } from '../../models/actions/user';
import { COLORS, STYLES } from '../../res';

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1
  },
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
  heading: {
    ...STYLES.TEXT_PRIMARY,
    marginBottom: 10,
    marginTop: 20
  },
  introContainer: {
    marginHorizontal: 30,
    marginBottom: 50
  },
  introduction: {
    ...STYLES.TEXT_TERTIARY,
    width: '100%',
    height: 160,
    padding: 0,
    paddingTop: 5,
    paddingLeft: 20,
    borderRadius: 10,
    borderWidth: 1,
    textAlignVertical: 'top',
    borderColor: COLORS.WHISPER,
    backgroundColor: COLORS.WHISPER
  },
  outerContainer: {
    height: '100%',
    width: '100%'
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  regIntroContainer: {
    alignItems: 'center',
    marginHorizontal: 30
  }
});

class IntroductionRequest extends React.Component {
  // TODO(roy): Add photo icon at edge of profile
  constructor(props) {
    super(props);
    this.state = {
      intro: ''
    };
  }

  render() {
    const { navigation, registerIntroduction } = this.props;

    return (
      <SafeAreaView style={SAFE_AREA_VIEW}>
        <View style={styles.outerContainer}>
          <View style={styles.introContainer}>
            <Text style={styles.heading}>Introduce Yourself!</Text>
            <Text style={STYLES.TEXT_TERTIARY}>
              Set a nice profile picture and describe yourself in a few words.
            </Text>
            <View style={styles.profileContainer}>
              <View style={styles.profile} />
            </View>
          </View>
          <View style={styles.regIntroContainer}>
            <TextInput
              style={styles.introduction}
              placeholder='Introduce yourself here!'
              placeholderTextColor={COLORS.LIGHT_GRAY}
              onChangeText={intro => this.setState({ intro })}
              multiline
            />
          </View>
          <Button
            style={styles.continueBtn}
            onPress={() => {
              registerIntroduction(this.state.intro);
              navigation.navigate('CommunitiesRegister');
            }}
          >
            <Text style={styles.continue}>Continue</Text>
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = {
  registerIntroduction: actionCreators.registerIntroduction
};

export default connect(null, mapDispatchToProps)(IntroductionRequest);
