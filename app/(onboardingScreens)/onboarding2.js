import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { AuthImgViewer } from "../../components/authImgProps";
import { GlobalStyles } from "../../styles/globalstyles";
import ButonProps from "../../components/buttonProps";
import { Header } from "../../components/header";

export default function Onboarding2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header/>

      {/* images */}
      <View style={styles.images}>
        <AuthImgViewer
          imgSource={require("../../assets/images/Ellipse1.png")}
          style={[styles.bgImg]}
        />
        <AuthImgViewer
          imgSource={require("../../assets/images/hero2.png")}
          style={styles.img1}
        />
        <AuthImgViewer
          imgSource={require("../../assets/images/sideImg1.png")}
          style={styles.sideImg}
        />
        <AuthImgViewer
          imgSource={require("../../assets/images/sideImg2.png")}
          style={styles.sideImg2}
        />
        <AuthImgViewer
          imgSource={require("../../assets/images/sideImg3.png")}
          style={styles.sideImg3}
        />
      </View>

      {/* Text */}
      <View style={[GlobalStyles.textArea,{marginBottom:50}]}>
        {/* Main text */}
        <View style={GlobalStyles.heroContainer}>
          <Text style={GlobalStyles.heroText}>
            Get delivery at your doorstep
          </Text>
        </View>

        <View style={GlobalStyles.paragraphContainer}>
          <Text style={GlobalStyles.parargraph}>
            Order your favourite menu with easy, on-demand delivery
          </Text>
        </View>
      </View>

      {/* Spacer to push button down */}
      <View style={{ flex: 1 }} />

      <View style={{ gap: 10 }}>
        <ButonProps
          text={"Get Started"}
          textStyle={GlobalStyles.buttonTextWhite}
          style={[GlobalStyles.button, GlobalStyles.greenButton]}
          onPress={() => {
            router.push("signUp");
          }}
        />
        <ButonProps
          text={"Sign Up"}
          textStyle={GlobalStyles.buttonTextGreen}
          style={[GlobalStyles.button, GlobalStyles.whiteBtn]}
          onPress={() => {
            router.push("signUp");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },

  images: {
    marginBottom: 20,
  },
  bgImg: {
    height: 330,
    position: "relative",
  },
  img1: {
    width: 297,
    height: 297,
    position: "absolute",
    bottom: 12,
    left: 18,
    zIndex: 100,
  },
  sideImg: {
    width: 45,
    height: 45,
    position: "absolute",
    zIndex: 100,
    bottom: 60,
    left: -15,
  },
  sideImg2: {
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    right: 35,
    width: 45,
    height: 45,
  },
  sideImg3: {
    position: "absolute",
    zIndex: 100,
    bottom: 285,
    right: 50,
    width: 45,
    height: 45,
  },
  textArea: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  heroContainer: {
    width: 290,
    justifyContent: "center",
    alignItems: "center",
  },
  heroText: {
    fontFamily: "poppins",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 35,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraphContainer: {
    width: 334,
    justifyContent: "center",
  },
  parargraph: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 400,
    color: "#00000",
    lineHeight: 20,
    fontFamily: "RethinkSans",
  },
  buttonContainer: {
    gap: 10,
  },
  button2: {
    backgroundColor: "#ECF2F0",
    color: "#307A59",
  },
});
