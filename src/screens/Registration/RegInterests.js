import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import R from '../../res/R'
import TagButton from '../../components/TagButton'
import addOrRemove from '../../utils/addOrRemove'

export default class RegInterests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.selected
    }
  }

render() {
    return (
        <View style={styles.container}>
            {this.makeButtons()}
        </View>
    )}

    onPress = (tag) => {
        let selected
        if (this.props.isExclusive) {
            selected = [tag]
        } else {
            selected = addOrRemove(this.state.selected, tag)
        }

        this.setState({ selected })
    }

    makeButtons() {
        return this.props.all.map((tag, i) => {
            const on = this.state.selected.includes(tag)
            const backgroundColor = on ? R.colors.onBgColor : R.colors.offBgColor
            const textColor = on ? R.colors.onText : R.colors.offText
            const borderColor = on ? R.colors.onBorder : R.colors.offBorder

            return (
                <TagButton
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    borderColor={borderColor}
                    onPress={() => {
                        this.onPress(tag)
                    }}
                    key={i}
                    showImage={on}
                    title={tag} />
            )
        })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20
  },

    descText: {
        marginTop: 120,
    },
  openMailBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.colors.BLACK,
    minHeight: 40,
    width: '80%',
    marginTop: 100,
    marginBottom: 80,
    borderRadius: 10
  },
  openMailTxt: {
    ...R.styles.TEXT_SECONDARY,
    color: R.colors.WHITE
  },
})