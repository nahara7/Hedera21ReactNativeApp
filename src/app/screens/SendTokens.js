import React from "react";
import {
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState, useRef, createRef } from "react";
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
import useUser from '../../user/useUser';
//import {Icon, Container, Header, Content, Right} from 'native-base';
//add on change drop down menu

//will add vendor Id
const transaction =  ( transactionToken, transactionAmount, transactionMemo) => {
  const user= useUser()
  console.log(user);
  console.log(user.email + " userId");
  console.log('executing')
  fetch ('https://still-coast-11655.herokuapp.com/api/v1.0/transaction/userVendor',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: user.userIdAccess,
      vendorId:'recg5IEL4f2QNLkHK' ,
      fee: '1',
      //memo optional
    })
   }) .then((response)=> response.json()
      .then((responseJson)=>{
        console.log('getting receipt')
        var status=responseJson.status;
        console.log(status);
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
  
  const [vendorId, setVendorId] = useState("");
  const [memo, setMemo] = useState("");
  const [token, setToken] = useState("");
  const[amount, setAmount]= useState("");

  const vendorIdInputRef = createRef();
  const tokenIdInputRef = createRef();
  const memoInputRef = createRef();
  const amountInputRef = createRef();
  const user = useUser()

  function handleTransaction(){
    console.log('starting transaction')
    //will add vendor Id
   
    transaction( token, amount, memo)
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
            onChangeText={(Token)=> setToken(Token)}
            onSubmitEditing={()=>amountInputRef.current && amountInputRef.current.focus()}
            blurOnSubmit={false} 
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Amount"
            ref={amountInputRef}
            placeholderTextColor="white"
            onChangeText={(Amount)=> setAmount(Amount)}
            onSubmitEditing={()=>memoInputRef.current && memoInputRef.current.focus()}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            ref={memoInputRef}
            placeholder="Memo(Optional)...."
            placeholderTextColor="white"
            onChangeText={(Memo)=> setAmount(Memo)}
            
          />
        </View>
        <TouchableOpacity style={SharedStyle.PanelButton} onPress={handleTransaction()}>
          <Text style={SharedStyle.PanelButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};