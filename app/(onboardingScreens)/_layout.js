import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text } from 'react-native'
import React from 'react'


export default function _layout() {
  return (
    <Stack screenOptions={{
      headerShown:false
    }}/>

  )
}