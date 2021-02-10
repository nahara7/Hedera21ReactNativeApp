
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",

    padding: 15,
    paddingTop: 30,
    paddingBottom: 30,
  },

  loginContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#ff9100",
    marginBottom: 40,
  },

  helpContainer: {
    display: "flex",
    flexDirection: "column",
  }, 

  help: {
    padding: 5
  },

  inputView: {
    width: "80%",
    backgroundColor: "#fcbf49",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
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
    width: "80%",
    backgroundColor: "black",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  loginText: {},
});