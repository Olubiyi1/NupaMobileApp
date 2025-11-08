import { View,Image,StyleSheet } from "react-native";
import React from "react";


export function AuthImgViewer({imgSource,style}){

    return(
      <View>
      <Image source={imgSource} style={[styles.imgBg, style]}/>
    </View>
    )
}

const styles = StyleSheet.create({
  imgBg: {
    height: 310,
    position: "relative",
  },
  heroImg:{
    width:297,
    height:297,
    position:"absolute",
    bottom:150,
    zIndex:100
  }
});
