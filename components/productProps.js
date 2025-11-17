import { View, Text, Image,StyleSheet } from "react-native";
import React from "react";

export default function ProductProps({ img, name, price, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image source={img} style={[{width:130,height:118,borderRadius:8},style]}/>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>C${price}</Text>
    </View>
  );
}
const styles= StyleSheet.create({
    container:{
        margin:5,
    },
    name:{
        fontWeight:700,
        fontFamily:"RethinkSans",
        fontSize:16
    },
    price:{
        fontFamily:"RethinkSans",
        fontSize:14.5,
        fontWeight:900,
        color:"#317657"
    }
})
