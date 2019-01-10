import React, { Component } from 'react'
import { Text, FlatList, View, StatusBar } from 'react-native'

import currencies from '../data/currencies'
import { ListItem, Separator } from '../components/List'

const TEMP_CURRENCY = 'CAD'

class CurrencyList extends Component {
  handlePress = () => {
    console.log("Row press")
  }
  
  render(){
    return(
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='default' translucent={false} />
        <FlatList   
          data={currencies} 
          renderItem={({ item }) => 
            <ListItem text={item} selected={item === TEMP_CURRENCY} onPress={this.handlePress} checkmark={false} />
          }
          keyExtractor={(item) => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

export default CurrencyList