
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10
  },

  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10
  },

  ProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: "#4853ef",
    borderRadius: 6,
    position: "absolute",
    right: 6,
    borderWidth: 2,
    borderColor: "#000",
  },

  SlideUp: {
    padding: 10,
    paddingTop: 0,

    flex: 1,
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 24,
  },

  PanelHandle: {
    height: 6,
    width: 50,
    backgroundColor: "#666",
    borderRadius: 6,
    alignSelf: "center",
    marginTop: 6,
  },

  PanelItemContainer: {
    borderWidth: 0.4,
    borderColor: "#666",
    padding: 14,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  PanelImage: {
    width: 30,
    height: 30,
    backgroundColor: "#000",
    borderRadius: 40,
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