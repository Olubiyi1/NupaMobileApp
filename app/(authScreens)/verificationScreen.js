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

export default function VerificationScreen() {
  return (
    <View
      style={[styles.container, { width: "90%", marginHorizontal: "auto"}]}
    >
      {/* top */}

      <View
        style={{
          gap: 5,
          marginBottom: 15,
          alignItems:"center"
        }}
      >
        <InputHeroTextProps
          text={"Verification Email"}
          style={GlobalStyles.inputHeader}
        />

        {/* paragraphs */}
        <View style={{
          alignSelf:"center",
          alignItems:"center",
          marginTop:10,
          gap:5
        }}>
          <InputHeroTextProps
            text={"Please enter the code we just sent to the email"}
            style={GlobalStyles.inPutParagraph}
          />
          <InputHeroTextProps
            text={"gloryolamide300@gmail.com"}
            style={[GlobalStyles.inPutParagraph,{fontWeight:600}]}
          />
        </View>

        {/* input */}
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignContent: "center",
            // borderWidth:1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput style={styles.inputStyle} />
          <TextInput style={styles.inputStyle} />
          <TextInput style={styles.inputStyle} />
          <TextInput style={styles.inputStyle} />
        </View>

        {/* resend token */}
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
            marginBottom:20
          }}
        >
          <InputHeroTextProps
            text={"If you didn't receive the code?"}
            style={GlobalStyles.inPutParagraph}
          />
          <InputHeroTextProps
            text={"Resend"}
            style={GlobalStyles.buttonTextGreen}
          />
        </View>

        {/* button */}
        <ButonProps
          text={"Continue"}
          style={[
            GlobalStyles.button,
            GlobalStyles.greenButton,
            { width: 350 },
          ]}
          textStyle={GlobalStyles.buttonTextWhite}
          onPress={()=>{
            router.push("welcome")
          }}
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
  inputStyle: {
    width: 50,
    height: 50,
    // borderWidth:1,
    backgroundColor: "#DADADA69",
    borderRadius: 10,
    marginTop: 20,
    fontSize: 29,
    fontFamily: "RethinkSans",
    textAlign: "center",
    fontWeight: 600,
  },
});
