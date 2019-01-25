import React from 'react'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'
import color from 'color'

import styles from './styles'

const InputWithButton = (props) => {
  const { buttonText, onPress, editable = true } = props
  const containerStyles = [styles.container]

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  )

  if(editable === false) {
    containerStyles.push(styles.containerDisabled)
  }

  const buttonTextStyles = [styles.buttonText]
  if(props.textColor) {
    buttonTextStyles.push({ color: props.textColor })
  }

  return(
    <View style={containerStyles}>
      <TouchableHighlight 
        style={styles.buttonContainer} 
        underlayColor={underlayColor}
        onPress={onPress}>
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput style={styles.input} underlineColorAndroid='transparent' {...props}/>
    </View>
  )
}

export default InputWithButton