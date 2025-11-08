import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#307A59",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 40,
  },
  headerContainer: {
    flexDirection: "row",
    alignContent: "flex-end",
    // borderWidth:1,
  },
  headerText: {
    fontFamily: "poppins",
    fontSize: 24,
    marginLeft: 10,
    width: 80,
  },
  authContainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  authImages: {
    marginBottom:20,
    // marginTop: 10,
  },
  authBgImg: {
    height: 310,
    position: "relative",
  },
  authCenterImg: {
    width: 297,
    height: 297,
    position: "absolute",
    bottom: 7,
    left: 7,
    zIndex: 100,
  },
  authLeftImg: {
    width: 44,
    height: 44,
    position: "absolute",
    zIndex: 100,
    bottom: 70,
    left: 1,
  },
  authRightImg: {
    position: "absolute",
    zIndex: 100,
    bottom: 20,
    right: 40,
    width: 44,
    height: 44,
  },
  authTopImg: {
    position: "absolute",
    zIndex: 100,
    bottom: 250,
    right: 50,
    width: 44,
    height: 44,
  },
  textArea: {
    fontFamily: "poppins",
    fontSize: 30,
    alignItems: "center",
    lineHeight: 35,
    fontWeight: "bold",
  },
  parargraph: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 400,
    color: "#00000",
    lineHeight: 20,
    fontFamily: "RethinkSans",
  },
  heroContainer: {
    width: 236,
    justifyContent: "center",
    alignItems: "center",
  },
  heroText: {
    fontFamily: "poppins",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 35,
    fontWeight: 600,
    // marginBottom: 15,
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
  button: {
    padding: 20,
    borderRadius: 10,
    width: 380,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth:1,
  },
  buttontext: {},
  greenButton: {
    backgroundColor: "#307A59",
  },
  buttonTextWhite: {
    color: "#fff",
  },
  buttonTextGreen: {
    color: "#307A59",
  },
  whiteBtn: {
    fontWeight: 800,
    color: "#307A59",
    backgroundColor: "#ECF2F0",
  },
  inputHeader: {
    fontFamily: "RethinkSans",
    fontSize: 29,
    color: "#141414",
    fontWeight: 600,
  },
  inPutParagraph: {
    fontFamily: "RethinkSans",
    fontWeight: 400,
    fontSize: 16,
    color: "#141414BF",
  },
  inputLabel: {
    fontFamily: "RethinkSans",
    fontSize: 16,
    fontWeight: 500,
    color: "#000000",
  },
  inputPlaceholder: {
    fontFamily: "RethninkSans",
    fontWeight: 400,
    fontSize: 14,
    fontStyle: "Regular",
    paddingLeft: 10,
  },
  inputForgotPassword: {
    fontFamily: "RethinkSans",
    fontWeight: 600,
    fontSize: 16,
    color: "#0B603A",
    // borderWidth:1,
  },
  inputWidth: {
    width: 365,
    height: 53,
    borderRadius: 10,
  },
  Oauth:{
     flexDirection:"row",
     height:63,
     width:350,
     borderWidth:1,
     justifyContent:"center",
     alignItems:"center",
     borderRadius:10,
     borderColor:"#0000004F"
  },
  OauthImg:{
    width:27,
    height:27,
    marginRight:10
  },
  OauthText:{
   fontSize:18,
   fontWeight:700,
   fontFamily:"RethinkSans"
  }
});
