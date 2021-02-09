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
import {base} from 'airtable'

import Airtable from '../airtable'
import getAirtableRecords from './getAirtableRecords'

const authenticate = async (email, username) => {
  console.log("starting search");
  const table = Airtable.base("Users");
  const options = {
    filterByFormula: `OR(email = '${email}', username = '${username}')`,
  };

  return {}
  // const users = await getAirtableRecords(table, options);
  // return users.some((user) => user.get("email") == email || user.get("username") == username)
};

const LoginScreen = (props) => {
  const {setUser} = props
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const usernameInputRef = createRef();
  const passwordInputRef = createRef();

  function handleLogin() {
    console.log('checking...')
    authenticate(userEmail, userName)
      // .then((user) => setUser(user))
      // .catch((error) => setError());
      .then((user) => setUser({})); // TODO wire API
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TOKA</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username..."
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
          placeholder="Password..."
          placeholderTextColor="white"
          onChangeText={(UserPassword) => setUserPassword(UserPassword)}
          ref={passwordInputRef}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.signUpButtonStyle, { marginTop: 150 }]}
        activeOpacity={0.5}
        onPress={handleLogin}
      >
        <Text style={[styles.loginText, { paddingTop: 10 }]}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginText}>Don't have an account? Sign up.</Text>
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
  logInButtonStyle: {
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
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#ff9100",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
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
    width: "80%",
    backgroundColor: "black",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {},
});
export default LoginScreen;
