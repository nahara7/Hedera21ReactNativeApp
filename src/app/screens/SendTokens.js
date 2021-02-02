import React from "react";
import{SafeAreaView, Image, TouchableWithoutFeedback, Button,Alert,
  TouchableOpacity} from "react-native"
  import {useState, useRef} from 'react';
  import SwipeUpDown from 'react-native-swipe-up-down';
 //import SlidingUpPanel from 'rn-sliding-up-panel';
  //import FlatList from 'react-native-web';
  import {StatusBar} from 'expo-status-bar';
  import styled from "styled-components/native";
  import {MaterialIcons} from '@expo/vector-icons';
  import {View, 
    Text, 
    Dimensions,
    StyleSheet, 
    Animated,
    FlatList} from 'react-native';
    import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Icon, Container, Header, Content, Right} from 'native-base';
class SendTokens extends React.Component{
    render(){
        return(
      
              <View>
               <Token/>
                     
              </View>
            
                    
          
           
          
        )
    }
} export default  SendTokens;

export const Token=()=>{            
          return(
        
           <SafeAreaView style ={{paddingTop: '10'}}>
              <Text style={{color: '#000', opacity: 0.6, marginBottom: 20}}> test Location</Text>
              <TouchableOpacity>
              <TouchableOpacity 
                
  
                style={styles.AddUser}>
                  
                  <View style={styles.AddUserIconbg}>
                  <MaterialIcons name='add' color= 'white' size={28}  style={{alignSelf:
                  'center'}}/>
                    </View> 
                    <Text style={{color: "#fff", paddingBottom: '10%'}}> Send</Text>
                    
                   
                  </TouchableOpacity>
                  
              </TouchableOpacity>
           </SafeAreaView>
                
                
          );
}
       const styles= StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#000',
              paddingTop:0
            },
          
            ProfileImage:{
              width: 55,
              height: 55,
              borderRadius: 40
            },
            ProfileImageNotification: {
              height: 12,
              width: 12,
              backgroundColor: '#4853ef',
              borderRadius: 6,
              position: 'absolute',
              right: 6,
              borderWidth: 2,
              borderColor: '#000'
            },
            AddUser:{
              height: 140,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0c0c0c',
              borderRadius: 10,
              marginRight: 14,
              position: 'absolute'
              
            },
            container: {
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
            AddUserIconbg: {
              width: 70,
              height: 70,
              backgroundColor: '#000',
              borderRadius: 10,
              marginBottom: 10,
              justifyContent: 'center'
            },
            PanelHandle: {
              height: 6,
              width: 50,
              backgroundColor: '#666',
              borderRadius: 6,
              alignSelf: 'center',
              marginTop: 6
            },
            PanelItemContainer: {
              borderWidth: 0.4,
              borderColor: '#666',
              padding: 14,
              borderRadius: 6,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20
            },
            PanelImage: {
              width: 30,
              height: 30,
              backgroundColor: '#000',
              borderRadius: 40
            },
            PanelButton: {
              padding:14,
              width: 200,
              justifyContent: 'center',
              backgroundColor: '#1c1c1c',
              borderRadius: 10
            },
            buttonContainer: {
              flex: 1,
            },
            PanelButtonText: {
              fontSize: 16,
              color: '#fff',
              alignSelf: 'center'
            }
          });
          
         
                
                  
                        




