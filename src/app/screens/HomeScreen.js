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
import { useNavigation } from "@react-navigation/native";
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

  const ModalRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 50, paddingHorizontal: 14 }}>
        <View>
          <View style={{ paddingBottom: "10%" }}>
            <Text style={{ fontSize: 26, color: "black" }}> Welcome Back,</Text>
            <Text style={{ fontSize: 26, color: "black", paddingBottom: 10 }}>
              Gabriel
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri:
                  "https://scontent.fagc1-2.fna.fbcdn.net/v/t31.0-8/20017494_1570223453010098_2798752839256677297_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=Y_mZcslnbsIAX95p6tF&_nc_ht=scontent.fagc1-2.fna&oh=78f39c7c6e0d85e6e503587f409c6d20&oe=603CC6F9",
              }}
              style={styles.ProfileImage}
            />
            <View style={styles.ProfileImageNotification}></View>
          </View>

          <View style={{ paddingBottom: "10%" }}>
            <Text style={{ color: "#ff9100", opacity: 0.6, marginBottom: 20 }}>
              {" "}
              Account ID
            </Text>
            <View style={{ paddingBottom: "10%" }}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                  <TouchableOpacity style={styles.AddUser}>
                    <View style={styles.AddUserIconbg}>
                      <MaterialIcons
                        name="add"
                        color="white"
                        size={28}
                        style={{ alignSelf: "center" }}
                      />
                    </View>
                    <Text style={{ color: "black", paddingBottom: "10%" }}>
                      {" "}
                      Send
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.AddUser}>
                  <View style={styles.AddUserIconbg}>
                    <MaterialIcons
                      name="add"
                      color="white"
                      size={28}
                      style={{ alignSelf: "center" }}
                    />
                  </View>
                  <Text style={{ color: "black", paddingBottom: "10%" }}>
                    {" "}
                    Redeem
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ borderColor: "white" }}>
                  <View style={styles.AddUser}>
                    <View style={styles.AddUserIconbg}>
                      <MaterialIcons
                        name="add"
                        color="white"
                        size={28}
                        style={{ alignSelf: "center" }}
                      />
                    </View>
                    <Text style={{ color: "black", paddingBottom: "10%" }}>
                      {" "}
                      Recieve{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <FlatList
                style={{ paddingTop: "10%" }}
                inverted
                horizontal
                data={Users}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.AddUser}>
                      <Image
                        style={styles.AddUserIconbg}
                        source={{ uri: item.userImage }}
                      />
                      <Text
                        style={{ color: "black", justifyContent: "center" }}
                      >
                        {item.userName}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 110 }}>
          <View style={{ flex: 1 }}>
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
                  borderRadius: 24,
                  paddingTop: 10,
                }}
              >
                <View style={styles.PanelHandle}></View>
                <View>
                  <Text style={{ marginVertical: 16, color: "black" }}>
                    {" "}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 0,
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
  AddUser: {
    height: 140,
    width: 100,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 14,
  },
  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: "orange",
    borderColor: "orange",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
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
