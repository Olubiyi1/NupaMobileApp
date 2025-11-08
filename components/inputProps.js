import { TextInput,View,StyleSheet } from "react-native";
import React from 'react'

export default function TextInputProps({text,style}) {
  return (
    <View>
      <TextInput placeholder={text} style={[styles.inputBg,style]}/>
    </View>
  )
}

const styles=  StyleSheet.create({
    inputBg:{
        backgroundColor:"#EAEBF0",
        width:"100%",
        height:53,
        borderRadius:10
    }
})