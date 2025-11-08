import { Text,View,StyleSheet } from "react-native";
import React from "react";



export function InputHeroTextProps({text,style}) {
  return (
    <View>
      <Text style={[styles.text,style]}>{text}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text:{
    fontWeight:700
  }
})