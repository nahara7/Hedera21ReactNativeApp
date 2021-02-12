
import { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,

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
    padding: 10,

    borderBottomColor: "#fcbf49",
    //borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
  },

  ProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: '#ffb703',
    borderRadius: 6,
    position: "absolute",
    right: 6,
    borderWidth: 2,
    borderColor: '#ffb703',
  },

  SlideUp: {
    padding: 10,
    paddingTop: 0,

    flex: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 24,
  },

  PanelHandle: {
    height: 6,
    width: 50,
    backgroundColor: Colors.gray,
    borderRadius: 6,
    alignSelf: "center",
    marginTop: 6,
  },

  PanelItemContainer: {
    borderWidth: 0.4,
    borderColor: Colors.gray,
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
    backgroundColor: Colors.white,
    borderRadius: 40,
  },
});