import { View, Text,Image,StyleSheet } from 'react-native'
import {GlobalStyles, GloblaStyles} from "../../styles/globalstyles"

import React from 'react'

export default function SplashScreen() {
  return (
    <View style={GlobalStyles.container}>
      <View style={{
        alignItems:"center"
      }}>
      <Image source={require("../../assets/images/logo.png")}/>
      <Text style={styles.text}>Nupa</Text>
      </View>
    </View>
  )
}


const styles =StyleSheet.create({
  text:{
     color:"#fff",
    fontSize:45,
    fontFamily: "poppins",
    marginTop:-30
  }
})