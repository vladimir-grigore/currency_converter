
import React, { Component } from 'react'
import { StatusBar, KeyboardAvoidingView } from 'react-native'

import { Container } from '../components/Container' 
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Buttons'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'

const BASE_CURRENCY = 'USD'
const QUOTE_CURRENCY = 'GBP'
const BASE_PRICE = '100' 
const QUOTE_PRICE = '79.74'
const CONVERSION_RATE = 0.7974
const CONVERSION_DATE = new Date()

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log("Currency press")
  }

  handlePressQuoteCurrency = () => {
    console.log("Currency press")
  }

  handleTextChange = (text) => {
    console.log("Text change", text)
  }

  handleSwapCurrency = () => {
    console.log("Swap currency")
  }

  handleOptionsPress = () => {
    console.log("Options Press")
  }

  render() {
    return(
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress}/>
        <KeyboardAvoidingView behavior='padding'>
          <Logo />

          <InputWithButton 
            buttonText={BASE_CURRENCY} 
            onPress={this.handlePressBaseCurrency}
            defaultValue={BASE_PRICE}
            keyboardType='numeric'
            onChangeText={this.handleTextChange}
          />
          <InputWithButton 
            buttonText={QUOTE_CURRENCY} 
            onPress={this.handlePressQuoteCurrency} 
            value={QUOTE_PRICE}
            editable={false}
          />
          <LastConverted 
            base={BASE_CURRENCY} 
            quote={QUOTE_CURRENCY} 
            date={CONVERSION_DATE} 
            converstionRate={CONVERSION_RATE} 
          />
          <ClearButton text='Reverse Currencies' onPress={this.handleSwapCurrency}/>
        </KeyboardAvoidingView>
      </Container>
    )
  }
} 

export default Home