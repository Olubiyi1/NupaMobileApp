import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Onboarding1 from "./onboarding1";
import Onboarding2 from "./onboarding2";

const Tab = createMaterialTopTabNavigator();

export default function SwipeScreens() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Onboarding Screens */}
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: true,
          tabBarStyle: { display: "none" }, // hide top tabs
        }}
        screenListeners={{
          state: (e) => {
            setCurrentIndex(e.data.state.index); // update current index
          },
        }}
      >
        <Tab.Screen name="First" component={Onboarding1} />
        <Tab.Screen name="Second" component={Onboarding2} />
      </Tab.Navigator>

      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        {[0, 1].map((i) => (
          <View
            key={i}
            style={[
              styles.dot,
              currentIndex === i ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotsContainer: {
    position: "absolute",
    bottom: 160,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#307A59",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});
