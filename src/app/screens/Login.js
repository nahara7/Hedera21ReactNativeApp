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

//import Airtable from '../airtable'
//import getAirtableRecords from './getAirtableRecords'


const authenticate = async (email, username) => {
  console.log("starting search");
  const options = {
    filterByFormula: `OR(email = '${email}', username = '${username}')`,
  };

  const users = await data.getAirtableRecords(table, options);


    const user=users.find(user=>user.email===email || user.username===username)
    console.log(user.username);
    console.log('user exists');   
    return user
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
    
         .then((newUser) => setUser(newUser)); 
         
      }
    // TODO wire API
  

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TOKA</Text>

      <View style={styles.loginContainer}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder=" Username..."
            placeholderTextColor="white"
            onChangeText={(UserName) => setUserName(UserName)}
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder=" Password..."
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
