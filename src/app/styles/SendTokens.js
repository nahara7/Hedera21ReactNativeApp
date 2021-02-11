
import { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 20
  },

  forgot: {
    color: Colors.black,
    fontSize: 11,
  },

  loginBtn: {
    width: 300,
    backgroundColor: Colors.black,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    //paddingTop:400,
    marginTop: 15,
    //marginBottom:10
  },

  loginText: {
    color: Colors.white,
  },

  AddUser: {
    height: 140,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    //paddingTop: 70,
    //marginRight: 14,
    position: "absolute",
  },

  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
});