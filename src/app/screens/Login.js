import React from "react";

import { useState, useRef, createRef } from "react";
import {
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
  

//import SwipeUpDown from 'react-native-swipe-up-down';
//import SlidingUpPanel from 'rn-sliding-up-panel';
// import Carousel from 'react-native-snap-carousel'
//import FlatList from 'react-native-web';
//import {StatusBar} from 'expo-status-bar';
//import styled from "styled-components/native";
//import {MaterialIcons} from '@expo/vector-icons';
//import { Entypo } from '@expo/vector-icons';

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Animated,
  FlatList,
} from "react-native";
import useUser from '../../user/useUser';
//import AsyncStorage from '@react-native-async-storage/async-storage';

//import {base} from 'airtable'

import SharedStyle from '../styles/shared';
import styles from '../styles/Login';
const Airtable = require('airtable');
const data = require('./DataController.js');

import { ServerStyleSheet } from "styled-components";


const base = new Airtable({
  apiKey:"keykefT9YD5rhkuFg",
}).base('appg4L9uWpNhonYHS');
const table = base('Accounts');
'
//import Airtable from '../airtable'
//import getAirtableRecords from './getAirtableRecords'


const authenticate = async (email, username) => {
  console.log("starting search");
  let userId='save'
  
  const options = {
    filterByFormula: `OR(email = '${email}', username = '${username}')`,
  };

  const users = await data.getAirtableRecords(table, options);

  const filteredUsers = users.filter((user) =>
    user.get("email") === email || user.get("username") === username
  );
  const user = filteredUsers[0]
  console.log({user})
  if (user !== undefined) {
    userId= user.get('userIdAccess');
    console.log("stored used id : " + userId);
    console.log("user exists");
  }

  console.log("saved");
 
  console.log({user, userId});
  return {
    id: user.get("userIdAccess"),
    email: user.get("email"),
    username: user.get("username"),
  };
};
const LoginScreen = (props) => {
  const {setUser} = props
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const usernameInputRef = createRef();
  const passwordInputRef = createRef();
  const user= useUser()

  function handleLogin() {
    console.log('checking...')
    authenticate(userEmail, userName)
      .then((newUser) => {
        console.log({newUser})
        setUser(newUser)
      });
  }


  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TOKA</Text>

      <View style={styles.loginContainer}>
        <View style={SharedStyle.InputView}>
          <TextInput
            style={SharedStyle.InputText}
            placeholder="Username"
            placeholderTextColor="white"
            onChangeText={(UserName) => setUserName(UserName)}
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>

        <View style={SharedStyle.InputView}>
          <TextInput
            secureTextEntry
            style={SharedStyle.InputText}
            placeholder="Password"
            placeholderTextColor="white"
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            ref={passwordInputRef}
          />
        </View>

        <TouchableOpacity style={SharedStyle.PanelButton} onPress={handleLogin}>
          <Text style={SharedStyle.PanelButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity style={styles.help}>
          <Text style={styles.loginText}>Don't have an account? Sign up.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.help}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
