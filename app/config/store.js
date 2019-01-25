import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducers from '../reducers'
import { processFontFamily } from 'expo-font';

const middleware = []
if(process.env.NODE_ENV == 'development') {
  middleware.push(logger)
}

export default createStore(reducers, applyMiddleware(...middleware))