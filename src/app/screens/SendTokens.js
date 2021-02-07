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
import SwipeUpDown from "react-native-swipe-up-down";
//import SlidingUpPanel from 'rn-sliding-up-panel';
//import FlatList from 'react-native-web';
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Header } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  FlatList,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { Container } from "native-base";
//import {Icon, Container, Header, Content, Right} from 'native-base';
class SendTokens extends React.Component {
  render() {
    return (
      <View>
        <Token />
      </View>
    );
  }
}
export default SendTokens;
//add on change drop down menu
export const Token = () => {
  return (
    <SafeAreaView>
      <Header
        style={styles.logo}
        backgroundColor="white"
        leftComponent={{ icon: "chevron-left", color: "black", size: 50 }}
        centerComponent={{
          text: "SEND TOKENS",
          style: { fontWeight: "bold", fontSize: 30, color: "#ff9100" },
        }}
      />
      <View style={styles.container}>
        <View style={{ paddingTop: 400 }}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Choose Token..."
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Amount"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Memo(Optional)...."
              placeholderTextColor="white"
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>SEND </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#ff9100",
    marginBottom: 10,
  },
  inputView: {
    width: 300,
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
