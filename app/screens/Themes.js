import React, { Component } from 'react'
import { ScrollView, StatusBar } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connect } from 'react-redux'

import { ListItem, Separator } from '../components/List'
import { changePrimaryColor } from '../actions/theme'

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
  $turqoise: '$primaryTurqoise',
  $red: '$primaryRed',
  $grey: '$primaryGrey',
})

class Themes extends Component {
  handleThemePress = (color) => {
    this.props.dispatch(changePrimaryColor(color))
    this.props.navigation.goBack()
  }

  render() {
    return(
      <ScrollView>
        <StatusBar translucent={false} barStyle='default' />
        <ListItem 
          text='Blue'
          checkmark={false}
          selected
          onPress={() => this.handleThemePress(styles.$blue)}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem 
          text='Orange'
          checkmark={false}
          selected
          onPress={() => this.handleThemePress(styles.$orange)}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem 
          text='Green'
          checkmark={false}
          selected
          onPress={() => this.handleThemePress(styles.$green)}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem 
          text='Purple'
          checkmark={false}
          selected
          onPress={() => this.handleThemePress(styles.$purple)}
          iconBackground={styles.$purple}
        />
        <Separator />
        <ListItem 
          text='Turquoise'
          checkmark={false}
          selected
          onPress={() => this.handleThemePress(styles.$turqoise)}
          iconBackground={styles.$turqoise}
        />
        <Separator />
        <ListItem 
          text='Red'
          checkmark={false}
          selected
          onPress={() => this.handleThemePress(styles.$red)}
          iconBackground={styles.$red}
        />
        <Separator />
        <ListItem 
          text='Grey'
          checkmark={false}
          selected
          onPress={() => this.handleThemePress(styles.$grey)}
          iconBackground={styles.$grey}
        />
        <Separator />
      </ScrollView>
    )
  }
}

export default connect()(Themes)
