import React from 'react'
import { StyleSheet } from 'react-native'
import {AppRouter} from './config/routing/routing'
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
// import Home from './config/screens/home'
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppRouter />
    </ApplicationProvider>
  )
}

export default App
const styles = StyleSheet.create({})