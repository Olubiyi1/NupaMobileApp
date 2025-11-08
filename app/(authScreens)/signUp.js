import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { useRouter } from 'expo-router'
import { InputHeroTextProps } from "../../components/inputHeroTextProps";
import TextInputProps from "../../components/inputProps";
import ButonProps from "../../components/buttonProps";
import { GlobalStyles } from "../../styles/globalstyles";

export default function SignUp() {
  const router = useRouter()
  return (
    <View
      style={[styles.container, { width: "90%", marginHorizontal: "auto" }]}
    >
      {/* top */}

      <View
        style={{
          gap: 5,
          marginBottom: 15,
        }}
      >
        <InputHeroTextProps text={"Sign Up"} style={GlobalStyles.inputHeader} />
        <InputHeroTextProps
          text={"Create an account and choose favourite menu"}
          style={GlobalStyles.inPutParagraph}
        />
      </View>

      {/* input */}
      <View
        style={{
          gap: 10,
        }}
      >
        <InputHeroTextProps text={"Name"} style={GlobalStyles.inputLabel} />
        <TextInputProps
          text={"Your Name"}
          style={GlobalStyles.inputPlaceholder}
        />
        <InputHeroTextProps text={"Email"} style={GlobalStyles.inputLabel} />
        <TextInputProps
          text={"Your Email"}
          style={GlobalStyles.inputPlaceholder}
        />
        <InputHeroTextProps text={"Password"} style={GlobalStyles.inputLabel} />
        <TextInputProps
          text={"Password"}
          style={GlobalStyles.inputPlaceholder}
        />
      </View>

      {/* Login Button */}
      <ButonProps
        text={"Register"}
        style={[GlobalStyles.button, GlobalStyles.greenButton, { width: 350,marginTop:20 }]}
        textStyle={GlobalStyles.buttonTextWhite}
        onPress={()=>{
          router.push("verificationScreen")

        }}
      />

      <View
        style={{
          // borderWidth:1,
          marginTop: 5,
          flexDirection: "row",
          gap: 5,
          width: 260,
          height: 55,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <InputHeroTextProps
          text={"Have an account?"}
          style={GlobalStyles.inPutParagraph}
        />
        <InputHeroTextProps
          text={"Sign In"}
          style={GlobalStyles.buttonTextGreen}
        />
      </View>

      {/* footer */}
      <View style={{
        width:205,
        height:34,
        alignSelf:"center",
        justifyContent:"center",
        marginTop:60
      }}>
        <InputHeroTextProps
          text="By clicking Register you agree to our Terms and Data Policy"
          style={{ fontWeight: "400", fontSize: 13, color: "#141414BF",textAlign:"center"}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop:30,
    flex: 1,
    paddingTop: 70,
  },
});
