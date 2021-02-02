import React from "react";
import{SafeAreaView, Image, TouchableWithoutFeedback, Button,Alert,
  TouchableOpacity} from "react-native"
  import {useState, useRef} from 'react';
  import SwipeUpDown from 'react-native-swipe-up-down';
  import SlidingUpPanel from 'rn-sliding-up-panel';
 // import Carousel from 'react-native-snap-carousel'
  //import FlatList from 'react-native-web';
  import {StatusBar} from 'expo-status-bar';
  import styled from "styled-components/native";
  import {MaterialIcons} from '@expo/vector-icons';
  import {createDrawerNavigator} from 'react-navigation-drawer';
  import {NavigationContainer} from '@react-navigation/native';
  import {createStackNavigator} from 'react-navigation-stack';
  import {createAppNavigator} from 'react-navigation';
  import {View, 
    Text, 
    Dimensions,
    StyleSheet, 
    Animated,
    FlatList} from 'react-native';
    import SettingsScreen from'./src/app/screens/SettingsScreen.js';
    import {DarkTheme, DefaultTheme} from '@react-navigation/native';
    
    import { 
      Provider as PaperProvider, 
      DefaultTheme as PaperDefaultTheme,
      DarkTheme as PaperDarkTheme 
    } from 'react-native-paper';
import SendTokens from "./src/app/screens/SendTokens.js";
import Home from './src/app/screens/HomeScreen.js'

function App(){
return (

      <Home/>
      );
} 
export default App;

