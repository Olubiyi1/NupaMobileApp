import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router';



export default function Welcome() {
  const router = useRouter()

  useEffect(()=>{
    setTimeout(() => {
      router.replace("(mainScreens)/home")
    }, 3000);
  },[])
  return (
    <View style={{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    }}>
      <Image source={require("../../assets/images/congrats.png")}
      style={{
        marginBottom:-15
      }}
      />
      <Text
      style={{
        fontFamily:"RethinkSans",
        fontWeight:600,
        fontSize:29,
        marginBottom:10
      }}
      >
        Congratulations</Text>

      <Text style={{
        textAlign:"center",
        width:300,
        lineHeight:21,
        fontFamily:"RethinkSans",
        fontSize:17
      }}>Your account setup is complete, please enjoy the best menu from us.</Text>
    </View>
  )
}