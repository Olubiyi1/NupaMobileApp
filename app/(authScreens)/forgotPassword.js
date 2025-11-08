import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { router, useRouter } from "expo-router";
import { InputHeroTextProps } from "../../components/inputHeroTextProps";
import TextInputProps from "../../components/inputProps";
import ButonProps from "../../components/buttonProps";
import { GlobalStyles } from "../../styles/globalstyles";
import { Ionicons } from "@expo/vector-icons";

export default function forgotPassword() {
  return (
    <View
      style={[
        styles.container,
        { width: "90%", marginHorizontal: "auto", marginTop: 60 },
      ]}
    >
      <View
        style={{
          gap: 5,
          marginBottom: 15,
        }}
      >
        <InputHeroTextProps
          text={"Forgot Password"}
          style={GlobalStyles.inputHeader}
        />

        {/* paragraph */}

        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            marginTop: 10,
            gap: 5,
          }}
        >
          <InputHeroTextProps
            text={
              "Select which contact details we should use to reset your password"
            }
            style={GlobalStyles.inPutParagraph}
          />
        </View>
      </View>

      {/* sign Up buttons */}
      <View
        style={{
          gap: 10,
        }}
      >
        {/* google */}
        <Pressable style={[GlobalStyles.Oauth,{justifyContent:"flex-start"}]}>
          <Ionicons name="mail" size={28} color={"#3E6D5B"} style={{marginLeft:20}}/>
          <View>
          <InputHeroTextProps
            text={"Email"}
            style={[{marginLeft:20}]}
          />
          <InputHeroTextProps
            text={"Send your email"}
            style={[GlobalStyles.inPutParagraph,{marginLeft:20}]}
          />
          </View>
        </Pressable>

        {/* ios */}

        <Pressable style={[GlobalStyles.Oauth,{justifyContent:"flex-start"}]}>
         <Ionicons name="call" size={24} color="#3E6D5B" style={{marginLeft:20}}/>
         <View>
          <InputHeroTextProps
            text={"Phone number"}
             style={{marginLeft:20}}
          />
          <InputHeroTextProps
            text={"Send your phone number"}
             style={[GlobalStyles.inPutParagraph,{marginLeft:20}]}
          />
          </View>
        </Pressable>
      </View>

      {/* button */}
      <ButonProps
        text={"Continue"}
        style={[GlobalStyles.button, GlobalStyles.greenButton, { width: 350,marginTop:40 }]}
        textStyle={GlobalStyles.buttonTextWhite}
        onPress={()=>{
          router.push("welcome")
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // paddingTop:30,
    flex: 1,
  },
});
