import React, { Component } from 'react'
import { FlatList, View, StatusBar } from 'react-native'

import currencies from '../data/currencies'
import { ListItem, Separator } from '../components/List'

const TEMP_CURRENCY = 'CAD'

class CurrencyList extends Component {
  handlePress = () => {
    this.props.navigation.goBack(null)
  }
  
  render(){
    return(
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='default' translucent={false} />
        <FlatList   
          data={currencies} 
          renderItem={({ item }) => 
            <ListItem text={item} selected={item === TEMP_CURRENCY} onPress={this.handlePress} checkmark={true} />
          }
          keyExtractor={(item) => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

export default CurrencyList
