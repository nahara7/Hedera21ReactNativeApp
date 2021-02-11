
import { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    paddingTop: 30,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10
  },

  header: {
    width: "100%",
    justifyContent: "center",
    borderBottomColor: "#fcbf49",
    //borderBottomColor: Colors.gray,
    borderBottomWidth: 1
  },

  TitleText: {
    fontWeight: "bold",
    fontSize: 30,
    color: Colors.orange 
  },

  CardDisplay: {
    paddingTop: 25,
    paddingLeft: 15,
    paddingBottom: 50,
    paddingRight: 15,
   
  },

  CardContentList: { 
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    overflow: "scroll",
   
  },

  CardText: {
    color: Colors.black,
    textAlign: "center" 
  },

  AddUser: {
    height: 140,
    width: 100,
    borderColor: "#fcbf49",
    //borderColor: Colors.grey,
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    margin: 7,
  },

  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: Colors.orange,
    borderColor: Colors.orange,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  PanelButton: {
    padding: 14,
    width: 200,
    justifyContent: "center",
    backgroundColor: Colors.black,
    borderRadius: 10,
  },

  PanelButtonText: {
    fontSize: 16,
    color: Colors.white,
    alignSelf: "center",
  },

  InputView: {
    width: 300,
    backgroundColor: Colors.orange,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },

  InputText: {
    height: 50,
    color: Colors.white,
  }
});