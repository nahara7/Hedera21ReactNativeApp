import React from "react";
<<<<<<< HEAD
=======

>>>>>>> d6a190208769895504582224fd976e47793a9693
import { useState, useRef, createRef } from "react";
import {
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
<<<<<<< HEAD
  //import {Id} from './Global.js';
=======
  
>>>>>>> d6a190208769895504582224fd976e47793a9693

//import SwipeUpDown from 'react-native-swipe-up-down';
//import SlidingUpPanel from 'rn-sliding-up-panel';
// import Carousel from 'react-native-snap-carousel'
//import FlatList from 'react-native-web';
//import {StatusBar} from 'expo-status-bar';
//import styled from "styled-components/native";
//import {MaterialIcons} from '@expo/vector-icons';
//import { Entypo } from '@expo/vector-icons';
<<<<<<< HEAD
=======

>>>>>>> d6a190208769895504582224fd976e47793a9693
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
<<<<<<< HEAD
=======

>>>>>>> d6a190208769895504582224fd976e47793a9693
//import {base} from 'airtable'

import SharedStyle from '../styles/shared';
import styles from '../styles/Login';
import Airtable from 'airtable'
const data = require('./DataController.js');
import { ServerStyleSheet } from "styled-components";
//export const userId=

import { ServerStyleSheet } from "styled-components";


const base = new Airtable({
  apiKey:"keykefT9YD5rhkuFg",
}).base('appg4L9uWpNhonYHS');
const table = base('Accounts');
<<<<<<< HEAD
//const USER_ID='@save_userid'
=======
'
>>>>>>> d6a190208769895504582224fd976e47793a9693
//import Airtable from '../airtable'
//import getAirtableRecords from './getAirtableRecords'

const  getuserAccountId=(userId)=>{
  let user='recoBCkJWolsRETIr' 
  console.log('executing');
  fetch ('https://still-coast-11655.herokuapp.com/api/v1.0/account/userAccountId/',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      baseId:user,
      
    })
   }) .then((response)=> response.json()
      .then((responseJson)=>{
        console.log('getting user account id')
        var accountId=responseJson;
        
        //update user object
        console.log(accountId);
        
      })
      .catch((error)=>{
        console.error(error)
      }),
   )}
const authenticate = async (email, username) => {
  console.log("starting search");
<<<<<<< HEAD
   let userId='save'
=======
  let userId='save'
>>>>>>> d6a190208769895504582224fd976e47793a9693
  
  const options = {
    filterByFormula: `OR(email = '${email}', username = '${username}')`,
  };

  const users = await data.getAirtableRecords(table, options);

<<<<<<< HEAD
  users.filter(user => {
    if (user.get('email') === email || user.get('username') === username) {
      
      
      console.log("stored used id : " + user.get('userIdAccess'));
      getuserAccountId(user.get('userIdAccess'))
      console.log("user exists")
     
      
    }
    
   
  });
 // await AsyncStorage.setItem(USER_ID,userId);
  console.log("saved");
  //var Id= await AsyncStorage.getItem(USER_ID);
  //console.log(Id); 
  return recordExists; 
};
  
  
  /*const users = await data.getAirtableRecords(table, options);


    const user=users.find(user=>user.email===email || user.username===username)
    //console.log(user.userIdAccess);
    var test=user.username;
    console.log(test);
    console.log('user exists');   
    return user
};*/
=======
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
>>>>>>> d6a190208769895504582224fd976e47793a9693
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
<<<<<<< HEAD
         .then((newUser) => setUser({})); 
         
      }
    // TODO wire API
  
=======
      .then((newUser) => {
        console.log({newUser})
        setUser(newUser)
      });
  }
>>>>>>> d6a190208769895504582224fd976e47793a9693


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
