import React from "react";
import {
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState, useRef } from "react";
// import SwipeUpDown from 'react-native-swipe-up-down';
import SlidingUpPanel from "rn-sliding-up-panel";
//import {StatusBar} from 'expo-status-bar';
//import NavContainer from './Navigator';
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  FlatList,
} from "react-native";
//import {Icon, Container, Header, Content, Right} from 'native-base';

//took out class. Getting the hot load error on snack.
//expo was crashing try to find the bug. Configure android studio.
//take out navigator for now and work on pages seperately for sake of moving forward

const Home = ({ navigation }) => {
  //demo users
  const Users = [
    {
      key: "1",
      userImage:
        "https://images.pexels.com/photos/4473870/pexels-photo-4473870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      userName: "Mom",
      transactionDate: "25 April 20",
      amount: "JVT 70",
      credit: true,
    },

    {
      key: "2",
      userImage:
        "https://images.pexels.com/photos/1863625/pexels-photo-1863625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      userName: "Nola CoffeeShop",
      transactionDate: "14 March 20",
      amount: "JVT 12",
      credit: true,
    },
    {
      key: "3",
      userName: "Coftale CoffeeShop",
      userImage:
        "https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      transactionDate: "05 March 20",
      amount: "JVT 40",
      credit: true,
    },
  ];

  const Operations = [
    {
      key: "1",
      text: "Send",
      operation: navigateToSendTokens
    },
    {
      key: "2",
      text: "Redeem",
      operation: () => console.log("unimplemented")
    },
    {
      key: "3",
      text: "Receive",
      operation: () => console.log("unimplemented")
    }
  ];

  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef(null);

  const RenderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <Image
          source={item.image}
          style={{ width: 360, height: 240, borderRadius: 10 }}
        />
      </TouchableWithoutFeedback>
    );
  };

  const [dragRange, setDragRange] = useState({
    top: height - 80,
    bottom: 160,
  });

  const _draggedValue = new Animated.Value(180);

  function navigateToSendTokens() {
    navigation.navigate('SendTokens')
  }

  const ModalRef = useRef(null);

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={{ fontSize: 26, color: "black" }}> Welcome back, Gabriel</Text>
        </View>
        <View style={styles.profile}>
          <Image
            source={{
              uri:
                "https://scontent.fagc1-2.fna.fbcdn.net/v/t31.0-8/20017494_1570223453010098_2798752839256677297_o.jpg" +
                "?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=Y_mZcslnbsIAX95p6tF&_nc_ht=scontent.fagc1-2.fna&oh=78f39c7c6e0d85e6e503587f409c6d20&oe=603CC6F9",
            }}
            style={styles.ProfileImage}
          />
          <Text style={{ color: "black", paddingLeft: 20}}>
            Account ID
          </Text>
          <View style={styles.ProfileImageNotification}></View>
        </View>

        <View>
          <View style={styles.CardDisplay}>
            <FlatList
              contentContainerStyle={styles.CardContentList}
              horizontal
              data={Operations}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={item.operation}>
                    <View style={styles.AddUser}>
                      <View style={styles.AddUserIconbg}>
                        <MaterialIcons
                          name="add"
                          color="white"
                          size={28}
                        />
                      </View>
                      <Text style={styles.CardText}>
                        {item.text}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />

            <FlatList
              contentContainerStyle={styles.CardContentList}
              horizontal
              data={Users}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.AddUser}>
                      <Image
                        style={styles.AddUserIconbg}
                        source={{ uri: item.userImage }}
                      />
                      <Text style={styles.CardText} >
                        {item.userName}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>

      <View>
        <SlidingUpPanel
          ref={ModalRef}
          draggableRange={dragRange}
          animatedValue={_draggedValue}
          backdropOpacity={0}
          snappingPoints={[360]}
          height={height + 20}
          friction={0.9}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              borderColor: "black",
              borderRadius: 6,
            }}
          >
            <View style={styles.PanelHandle}></View>
            <View>
              <Text style={{ marginVertical: 16, color: "black" }}>
                Recent Transactions
              </Text>
            </View>
            <View style={{ height: 500, paddingBottom: 10 }}>
              <FlatList
                data={Users}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.PanelItemContainer}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <View style={{ marginRight: 10 }}>
                          <Image
                            source={{ uri: item.userImage }}
                            style={styles.PanelImage}
                          />
                        </View>
                        <View>
                          <Text style={{ fontSize: 14, color: "black" }}>
                            {item.userName}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              color: "black",
                              opacity: 0.6,
                            }}
                          >
                            {item.transactionDate}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            color: "black",
                            marginHorizontal: 2,
                          }}
                        >
                          {item.amount}{" "}
                        </Text>

                        {item.credit ? (
                          <MaterialIcons
                            name="arrow-drop-up"
                            size={22}
                            color="green"
                          />
                        ) : (
                          <MaterialIcons
                            name="arrow-drop-down"
                            size={22}
                            color="#ff3838"
                          />
                        )}
                      </View>
                    </View>
                  );
                }}

                //view history
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "flex-end" }}
            >
              <TouchableOpacity style={styles.PanelButton}>
                <Text style={styles.PanelButtonText}>
                  View Full History
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SlidingUpPanel>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    paddingTop: 30,
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
    borderColor: "black",
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

export default Home;
