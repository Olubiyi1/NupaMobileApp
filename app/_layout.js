import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
  screenOptions={{
    headerShown:false,
    animation:"none"
  }}>
    <Stack.Screen name="(onboardingScreen)/onboarding1" options={{
      // headerShown:false
    }}/>
    <Stack.Screen name="(onboardingScreen)/onboarding2"/>
    <Stack.Screen name="(authScreens)/signUp"/>
    <Stack.Screen name="(authScreens)/signIn"/>
    <Stack.Screen name="(authScreens)/verificationScreen"/>    
    <Stack.Screen name="(authScreens)/forgotPassword"/>    
  </Stack>
}
