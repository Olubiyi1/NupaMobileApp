import { Stack } from "expo-router";

import { View, Text } from 'react-native'
import React from 'react'

export default function _layout() {
  return (
    <Stack screenOptions={{
        // headerShown:false
        animation:"none",
        headerTransparent:true,
        headerTitle:""
    }}>
        <Stack.Screen name="signIn"/>
        <Stack.Screen name="signUp"/>
        <Stack.Screen name="verificationScreen"/>
        <Stack.Screen name="forgotPassword"/>
        <Stack.Screen name="welcome" options={{
          headerShown:false
        }}/>
    </Stack>
  )
}