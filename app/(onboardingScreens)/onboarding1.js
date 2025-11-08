import { View, Text, Pressable,TouchableWithoutFeedback } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Header } from "../../components/header";
import { AuthImgViewer } from "../../components/authImgProps";
import { GlobalStyles } from "../../styles/globalstyles";
import ButonProps from "../../components/buttonProps"

export default function Onboarding1() {
  const router = useRouter();

  return (
    <View style={GlobalStyles.authContainer}>
      <Header />

      {/* images */}
      <View style={GlobalStyles.authImages}>
        <AuthImgViewer
          imgSource={require("../../assets/images/ellipse.png")}
          style={GlobalStyles.authBgImg}
        />
        <AuthImgViewer
          imgSource={require("../../assets/images/img1.png")}
          style={GlobalStyles.authCenterImg}
        />
        <AuthImgViewer
          imgSource={require("../../assets/images/leftImg.png")}
          style={GlobalStyles.authLeftImg}
        />
        <AuthImgViewer
          imgSource={require("../../assets/images/rightImg.png")}
          style={GlobalStyles.authRightImg}
        />
        <AuthImgViewer
          imgSource={require("../../assets/images/rightImg.png")}
          style={GlobalStyles.authTopImg}
        />
      </View>

      {/* Text */}
      <View style={[GlobalStyles.textArea,{marginBottom:50}]}>
        {/* Main text */}
        <View style={GlobalStyles.heroContainer}>
          <Text style={GlobalStyles.heroText}>All your favourite foods</Text>
        </View>

        <View style={GlobalStyles.paragraphContainer}>
          <Text style={GlobalStyles.parargraph}>
            Order your favourite menu with easy, on-demand delivery
          </Text>
        </View>
      </View>

      

      {/* Buttons */}

      <View style={{gap:10}}>
        <ButonProps text={"Continue"} style={[GlobalStyles.button,GlobalStyles.greenButton]} 
        textStyle={GlobalStyles.buttonTextWhite}
      
          onPress={()=>{
            router.push("signIn")
          }}
        />
        <ButonProps text={"Sign In"} style={[GlobalStyles.button,GlobalStyles.whiteBtn]}
        textStyle={GlobalStyles.buttonTextGreen}
        onPress={()=>{
            router.push("signIn")
          }}
        />
      </View>


    </View>
  );
}
