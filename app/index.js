
import SplashScreen from "./(onboardingScreens)/splashscreen";
import { GlobalStyles } from "@/styles/globalstyles";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function Home() {
  const router = useRouter();
  
  // Loaded custom font
  const [fontLoaded] = useFonts({
    poppins: require("../assets/font/Poppins-Bold.ttf"),
    RethinkSans:require("../assets/font/RethinkSans-VariableFont_wght.ttf")
  });

  useEffect(() => {
    // Only navigate after fonts are loaded
    if (fontLoaded) {
      const timer = setTimeout(() => {
        router.replace("/swipeScreens");
      }, 3000);
      
      //clears the timer 
      return () => clearTimeout(timer);
    }

    // Added dependencies
  }, [fontLoaded, router]); 

  // if fonts not loaded, display the text
  if (!fontLoaded) {
    return (
      <View style={GlobalStyles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={GlobalStyles.container}>
      <SplashScreen />
    </View>
  );
}
