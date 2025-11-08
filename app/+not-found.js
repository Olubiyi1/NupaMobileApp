import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Not_Found() {
  const router = useRouter()
  return (
    <View>
      <Text>Ooops ,page not found</Text>
      <Pressable onPress={()=>{
        router.replace("onboarding1")
      }}>
      <Text>Go back home</Text>
      </Pressable>
    </View>
  )
}