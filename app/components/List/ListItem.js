import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import styles from './styles';
import Icon from './Icon'

const ListItem = ({ text, onPress, selected=false, checkmark='true', visible='true', customIcon=null }) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      { selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon/> }
      {customIcon}
    </View>
  </TouchableHighlight>
)

export default ListItem