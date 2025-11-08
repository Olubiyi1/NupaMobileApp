import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../styles/globalstyles";

export default function ButonProps({ text, style, onPress,textStyle }) {
  return (
    <View>
      <TouchableOpacity style={style} onPress={onPress} >
        <Text style={[styles.btnText,textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    btnText:{
        fontSize: 21,
        fontFamily: "RethinkSans",
        fontWeight: 700,
        letterSpacing:2,
        fontFamily: "RethinkSans",
        
    }
})
