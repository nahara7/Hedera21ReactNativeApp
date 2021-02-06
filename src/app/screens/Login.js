import React from "react";
import{SafeAreaView, Image, TouchableWithoutFeedback, Button,Alert,
  TouchableOpacity} from "react-native"
  import {useState, useRef} from 'react';
  //import SwipeUpDown from 'react-native-swipe-up-down';
 //import SlidingUpPanel from 'rn-sliding-up-panel';
 // import Carousel from 'react-native-snap-carousel'
  //import FlatList from 'react-native-web';
  //import {StatusBar} from 'expo-status-bar';
  //import styled from "styled-components/native";
  //import {MaterialIcons} from '@expo/vector-icons';
  //import { Entypo } from '@expo/vector-icons'; 
  import {View, 
    Text, 
    Dimensions,
    StyleSheet, 
    TextInput,
    Animated,
    FlatList} from 'react-native';

 export default class LoginScreen extends React.Component{
    render(){
        return (
          <View style={styles.container}>
            <Text style={styles.logo}>TOKA</Text>
            <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Username..." 
                placeholderTextColor="white"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Password..." 
                placeholderTextColor="white"
                onChangeText={text => this.setState({password:text})}/>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
    
      
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#ff9100",
        marginBottom:40
      },
      inputView:{
        width:"80%",
        backgroundColor:"#fcbf49",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"white"
      },
      forgot:{
        color:"black",
        fontSize:11
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"black",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color:"white"
      }
    });