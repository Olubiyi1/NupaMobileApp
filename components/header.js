import { View, Text, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../styles/globalstyles";

export function Header() {
  return (
    <View style={[GlobalStyles.headerContainer,{justifyContent:"center",alignItems:"center"}]}>
      <View>
        <Image
          source={require("../assets/images/headerImg.png")}
          style={GlobalStyles.image}
        />
      </View>
      <View>
        <Text style={GlobalStyles.headerText}>Nupa</Text>
      </View>
    </View>
  );
}
