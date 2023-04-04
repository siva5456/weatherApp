import React from 'react'
import AppNavigator from './AppNavigator'
import { Provider } from 'react-redux'
import { Mystore } from '../reduxstore/store'


function Main() {
  return (
    <Provider store={Mystore}>
      <AppNavigator  />
    </Provider>

  )
}

export default Main