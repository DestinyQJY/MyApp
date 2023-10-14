import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Index from './src/index'

export default function App() {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  )
}