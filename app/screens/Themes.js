import React, { Component } from 'react'
import { ScrollView, StatusBar } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { ListItem, Separator } from '../components/List'

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
})

class Themes extends Component {
  handleThemePress = (color) => {

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
      </ScrollView>
    )
  }
}

export default Themes
