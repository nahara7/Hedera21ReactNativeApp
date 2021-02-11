
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",

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
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },

  titleText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#ff9100" 
  },

  CardDisplay: {
    paddingTop: 25,
    paddingLeft: 15,
    paddingBottom: 50,
    paddingRight: 15
  },

  CardContentList: { 
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    overflow: "scroll"
  },

  CardText: {
    color: "black",
    textAlign: "center" 
  },

  AddUser: {
    height: 140,
    width: 100,
    borderColor: "grey",
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    margin: 7,
  },

  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: "orange",
    borderColor: "orange",
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  PanelButton: {
    padding: 14,
    width: 200,
    justifyContent: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
  },

  PanelButtonText: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
  },
});