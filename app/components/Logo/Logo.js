import React, { Component } from 'react'
import { View, ImageBackground, Image, Text, Keyboard, Animated } from 'react-native'

import styles from './styles'

const ANIMATION_DURATION = 250

class Logo extends Component {
  constructor(props) {
    super(props)

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize)
    this.logoTopValue = new Animated.Value(styles.$logoTopValue)
    this.imageWidth = new Animated.Value(styles.$largeImageSize)
  }

  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardShow)
    this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardHide)
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.logoTopValue, {
        toValue: -37,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.logoTopValue, {
        toValue: 7,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ]

    const imageStyle = [
      styles.logo,
      { width: this.imageWidth, top: this.logoTopValue },
      this.props.tintColor ? { tintColor: this.props.tintColor} : null,
    ]

    return(
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={containerImageStyle}
          source={require('./images/background.png')}
        />
        <Animated.Image resizeMode="contain" style={imageStyle} source={require('./images/logo.png')} />
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}

export default Logo
