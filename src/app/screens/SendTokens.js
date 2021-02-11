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
import styles from "../styles/SendTokens";
import SharedStyle from "../styles/shared";
import { Share } from "react-native";
//import {Icon, Container, Header, Content, Right} from 'native-base';
//add on change drop down menu

const transaction =  (vendorTransactionId, transactionToken, transactionAmount, transactionMemo) => {
  //call global var
  fetch ('https://still-coast-11655.herokuapp.com/api/v1.0/transaction/userVendor',{
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: global.USER,
      vendorId: vendorTransactionId,
      fee: transactionAmount,
      //memo optional
    }),
   }) .then((response)=> response.json()
      .then((responseJson)=>{
        console.log('getting receipt')
        return responseJson.status;
      })
      .catch((error)=>{
        console.error(error)
      }),
   )}


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

export default SendTokens = () => {
  
  onst [vendorId, setVendorId] = useState("");
  const [memo, setMemo] = useState("");
  const [token, setToken] = useState("");
  const[amount, setAmount]= userSTate("");

  const vendorIdInputRef=createRef();
  const tokenIdInputRef=createRef();
  const memoInputRef=createRef();
  const amountInputRef=createRef();
  
  function handleTransaction(){
    console.log('starting transaction')
    transaction(vendorId, token, amount, memo)
    //.then
  }
  
  
  return (
    <SafeAreaView style={[SharedStyle.container, {backgroundColor: 'white'}]}>
      <View style={SharedStyle.header}>
        <Text style={SharedStyle.titleText}>
          Send Tokens
        </Text>
      </View>

      <View style={SharedStyle.CardDisplay}>
        <FlatList
          contentContainerStyle={SharedStyle.CardContentList}
          horizontal
          data={Users}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={SharedStyle.AddUser}>
                  <Image
                    style={SharedStyle.AddUserIconbg}
                    source={{ uri: item.userImage }}
                  />
                  <Text style={SharedStyle.CardText} >
                    {item.userName}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.form}>
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
        <TouchableOpacity style={SharedStyle.PanelButton}>
          <Text style={SharedStyle.PanelButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};