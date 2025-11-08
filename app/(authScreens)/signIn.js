import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
// import { useRouter } from 'expo-router'
import { InputHeroTextProps } from "../../components/inputHeroTextProps";
import TextInputProps from "../../components/inputProps";
import ButonProps from "../../components/buttonProps";
import { GlobalStyles } from "../../styles/globalstyles";
import { router } from "expo-router";

export default function Sign_In() {
  return (
    <View style={[styles.container,{width:"90%",marginHorizontal:"auto"}]}>
      {/* top */}
      <View style={{
        gap:5,
        marginBottom:15
      }}> 
        <InputHeroTextProps text={"Welcome Back!"} style={GlobalStyles.inputHeader}/>
        <InputHeroTextProps text={"Sign in to your account"} style={GlobalStyles.inPutParagraph} />
      </View>

      {/* input */}
      <View style={{
        gap:10
      }}>
        <InputHeroTextProps text={"Email"} style={GlobalStyles.inputLabel}/>
        <TextInputProps text={"Your Email"} style={GlobalStyles.inputPlaceholder}/>
        <InputHeroTextProps text={"Password"} style={GlobalStyles.inputLabel}/>
        <TextInputProps text={"Your Password"} style={GlobalStyles.inputPlaceholder}/>
        <Pressable
        onPress={()=>{
          router.push("forgotPassword")
        }}>
        <InputHeroTextProps text={"Forgot Password?"} style={[GlobalStyles.inputForgotPassword,{marginBottom:10,marginBottom:20}]}/>
        </Pressable>
      </View>

      {/* Login Button */}
      <ButonProps text={"Login"} style={[GlobalStyles.button,GlobalStyles.greenButton,{width:350}]}
      textStyle={GlobalStyles.buttonTextWhite}
      onPress={()=>{
        router.push("welcome")
      }}
      />

      {/* signup */}

      <View style={{
        // borderWidth:1,
        marginTop:5,
        flexDirection:"row",
        gap:5,
        width:260,
        height:55,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
      }}>
        <InputHeroTextProps text={"Don't have an account?"} style={GlobalStyles.inPutParagraph}/>
        <Pressable >
          <InputHeroTextProps text={"Sign Up"} style={[GlobalStyles.buttonTextGreen]}
        />
        </Pressable>
      </View>

      {/* or */}
      <View>
        <Image source={require("../../assets/images/or.png")} style={{
          // borderWidth:1,
          width:275,
          height:25,
          marginBottom:10,
          justifyContent:"center",
          alignSelf:"center"
        }}/>
      </View>

      {/* sign Up buttons */}
      <View style={{
        gap:10
      }}>

        {/* google */}
      <Pressable style={GlobalStyles.Oauth}>
        <Image source={require("../../assets/images/google.png")} style={GlobalStyles.OauthImg}/>
        <InputHeroTextProps text={"Sign In with Google"} style={GlobalStyles.OauthText}/>
      </Pressable>

      {/* ios */}

      <Pressable style={GlobalStyles.Oauth}>
        <Image source={require("../../assets/images/ios.png")} style={GlobalStyles.OauthImg}/>
        <InputHeroTextProps text={"Sign In with IOS"} style={GlobalStyles.OauthText} />
      </Pressable>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
   
    // paddingTop:30,
    flex:1,
    paddingTop:60
  }
});
