
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputView: {
    width: 300,
    backgroundColor: "#fcbf49",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 20
  },

  inputText: {
    height: 50,
    color: "white",
  },

  forgot: {
    color: "black",
    fontSize: 11,
  },

  loginBtn: {
    width: 300,
    backgroundColor: "black",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    //paddingTop:400,
    marginTop: 15,
    //marginBottom:10
  },

  loginText: {
    color: "white",
  },

  AddUser: {
    height: 140,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c0c0c",
    borderRadius: 10,
    //paddingTop: 70,
    //marginRight: 14,
    position: "absolute",
  },

  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
});