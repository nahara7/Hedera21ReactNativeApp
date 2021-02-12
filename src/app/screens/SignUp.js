import React from "react";
import {
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
//import { TouchableOpacity} from 'react-native-gesture-handler';
import { useState, useRef, createRef } from "react";
//import SwipeUpDown from 'react-native-swipe-up-down';
//import SlidingUpPanel from 'rn-sliding-up-panel';
// import Carousel from 'react-native-snap-carousel'
//import FlatList from 'react-native-web';
//import {StatusBar} from 'expo-status-bar';
//import styled from "styled-components/native";
//import {MaterialIcons} from '@expo/vector-icons';
//import { Entypo } from '@expo/vector-icons';

import { Header } from "react-native-elements";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Animated,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  FlatList,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import {
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";

export default SignUpScreen = ({Navigation}) => {
  var Airtable = require("airtable");
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: "keykefT9YD5rhkuFg",
  });
  var base = Airtable.base("appg4L9uWpNhonYHS");
  const userTable = base("Users");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [userRetypePassword, setUserRetypePassword] = useState("");
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const[firstName, setFirstName]=useState("");
  const[lastName, setLastName]= useState("");
  
  const userNameInputRef=createRef();
  const emailInputRef = createRef();
  const typeInputRef = createRef();
  const passwordInputRef = createRef();
  const userRetypePasswordInputRef = createRef();
  const firstNameInputRef=createRef();
  const lastNameInputRef=createRef();
    
  
  const handleSubmitButton = () => {
    setErrortext("");
    if (!userName) {
      alert("Please fill Name");
      return;
    }
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    //Show Loader
    //add drop down menu and choose
    //return type
    setLoading(true);

    var dataToSend = {
      username: userName,
      email: userEmail,
      password: userPassword,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    base("Accounts").create(
      [
        {
          fields: {
            password: userPassword,
            username: userName,
            email: userEmail,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getRecordId);
        });
      }
    );

    fetch('https://still-coast-11655.herokuapp.com/api/v1.0/createUser', {
    method: 'POST',
    body: formBody,
    headers: {
      //Header Defination
       'Accept': 'application/json',
      'Content-Type':'application/json',
      
    },
    body: JSON.stringify({
      username: userName,
      password: userPassword,
      email: userEmail,
      firstname: firstName,
      lastname: lastName

    })
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("creating user")
      console.log(responseJson);
      // If server response message same as Data Matched
      if (responseJson.status === 'success') {
        setIsRegistraionSuccess(true);
        console.log(
          'Registration Successful. Please Login to proceed'
        );
      } else {
        setErrortext(responseJson.msg);
      }
    })
    .catch((error) => {
      //Hide Loader
      setLoading(false);
      console.error(error);
    });
  };
  return (
    <View>
      <Header
        style={styles.logo}
        backgroundColor="white"
        leftComponent={{ icon: "chevron-left", color: "black", size: 50 }}
        centerComponent={{
          text: "SIGN UP",
          style: { fontWeight: "bold", fontSize: 30, color: "#ff9100" },
        }}
      />

      <View style={[styles.container, { paddingTop: 250 }]}>
        
      <View style={styles.inputView}>
          <TextInput
            style={[styles.inputText]}
            onChangeText={(FirstName) => setFirstName(FirstName)}
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="Enter Firstname"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            onSubmitEditing={() =>
             lastNameInputRef.current && lastNameInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={[styles.inputText]}
            onChangeText={(LastName) => setLastName(LastName)}
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="Enter Lastname"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            ref={lastNameInputRef}
            onSubmitEditing={() =>
             userNameInputRef.current && userNameInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
        
        
        <View style={styles.inputView}>
          <TextInput
            style={[styles.inputText]}
            onChangeText={(UserName) => setUserName(UserName)}
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="Enter username"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            ref={userNameInputRef}
            onSubmitEditing={() =>
              emailInputRef.current && emailInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="Enter email"
            placeholderTextColor="white"
            ref={emailInputRef}
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter password"
            placeholderTextColor="white"
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            ref={passwordInputRef}
            returnKeyType="next"
            onSubmitEditing={() =>
              userRetypePasswordInputRef.current &&
              userRetypePasswordInputRef.current.focus()
            }
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Retype Password"
            placeholderTextColor="white"
            onChangeText={(UserRetypePassword) =>
              setUserRetypePassword(UserRetypePassword)
            }
            keyboardType="default"
            ref={userRetypePasswordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
            onSubmitEditing={() =>
              userRetypePasswordInputRef.current &&
              userRetypePasswordInputRef.current.focus()
            }
          />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.signUpButtonStyle, { marginTop: 215 }]}
        activeOpacity={0.5}
        onPress={(console.log("creating account"), handleSubmitButton)}
      >
        <Text style={[styles.loginText, { paddingTop: 10 }]}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
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
  signUpButtonStyle: {
    backgroundColor: "black",
    borderWidth: 0,
    color: "black",
    borderColor: "#7DE24E",
    height: 45,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    position: "absolute",
    left: 61,
    top: 12,
    right: 0,
    height: 20,
    fontSize: 14,
    lineHeight: 14,
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
    zIndex: 1,
    width: 80,
    flex: 1,
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
//export default SignUpScreen;
