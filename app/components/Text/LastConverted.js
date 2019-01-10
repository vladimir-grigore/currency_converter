import React from 'react'
import { Text } from 'react-native'
import moment from 'moment'

import styles from './styles'

const LastConverted = ({ base, quote, converstionRate, date }) => (
  <Text style={styles.smallText}>
    1 {base} = {converstionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
  </Text>
)

export default LastConverted