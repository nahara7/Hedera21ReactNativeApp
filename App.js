import React, { useState, useRef } from "react";
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
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  FlatList,
} from "react-native";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import SettingsScreen from "./src/app/screens/SettingsScreen.js";
import SendTokens from "./src/app/screens/SendTokens.js";
import LoginScreen from "./src/app/screens/Login.js";
import Home from "./src/app/screens/HomeScreen.js";
import SignUpScreen from "./src/app/screens/SignUp.js";
import Navigator from './src/app/screens/Navigator.js'

function App() {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  )
}

export default App;
