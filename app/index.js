import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Provider } from 'react-redux'

import Navigator from './config/routes'
import { AlertProvider } from './components/Alert'
import store from './config/store'


EStyleSheet.build({
  $primaryBlue: '#00008B',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#3CB371',
  $primaryPurple: '#9E768F',
  $primaryTurqoise: '#00CED1',
  $primaryRed: '#DC143C',
  $primaryGrey: '#666666',
  $white: '#fff',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
})

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null}/>
    </AlertProvider>
  </Provider>
)
