import React, { useEffect } from "react";
import {
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState, useRef } from "react";
// import SwipeUpDown from 'react-native-swipe-up-down';
import SlidingUpPanel from "rn-sliding-up-panel";
//import {StatusBar} from 'expo-status-bar';
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  FlatList,
  ImageBackground
} from "react-native";
import SharedStyle from '../styles/shared';
import useUser from '../../user/useUser';
import styles from '../styles/HomeScreen';
import { Share } from "react-native";
import {Footer, Title, Container} from 'native-base';
//import {Icon, Container, Header, Content, Right} from 'native-base';


function  getuserAccountId(loggedInUser){
 
  console.log('executing');
  return fetch ('http://localhost:8080/api/v1.0/account/userAccountId/',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      baseId:loggedInUser.id,
      
    })
   }) .then((response)=> response.json()
      .then((responseJson)=>{
        console.log('getting user account id')
        var accountId=responseJson;
        
        //update global var
        console.log(accountId);
        
      })
      .catch((error)=>{
        console.error(error)
      }),
   )}


const getuserBalance =  (userId) => {
  //TO DO -- render
  let user='recoBCkJWolsRETIr' 
  console.log('executing')
  return fetch ('http://localhost:8080/api/v1.0/account/userBalance/',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      baseId:userId,
      
    })
   }) .then((response)=> response.json()
      .then((responseJson)=>{
        console.log('')
        var accountBalance=responseJson;
        console.log(accountBalance);
        return responseJson;
      })
      .catch((error)=>{
        console.error(error)
      }),
   )}
   const getuserTokenAssociation =  (userId) => {
    //TO DO -- render
    let user='recoBCkJWolsRETIr' 
    console.log('executing')
    fetch ('https://still-coast-11655.herokuapp.com/api/v1.0//userTokenAssociate/',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        baseId:userId,
        
      })
     }) .then((response)=> response.json()
        .then((responseJson)=>{
          console.log('getting  token relationships')
          var tokens=responseJson.status;
          console.log(tokens);
          return responseJson;
        })
        .catch((error)=>{
          console.error(error)
        }),
     )}
    

  const Home = ({ navigation }) => {
  const user=useUser()

  console.log(user.id)
  const [userAccountId, setUserAccountId]=useState("");
  
  {/*useEffect(()=>{
    getuserAccountId(user).then((AccountId)=>{setUserAccountId(AccountId)
  })
},[user]);*/}
  
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

  const Operations = [
    {
      key: "1",
      text: "Send",
      icon: "send",
      operation: navigateToSendTokens
    },
    {
      key: "2",
      text: "Redeem",
      icon: "redeem",
      operation: () => console.log("unimplemented")
    },
    {
      key: "3",
      text: "Receive",
      icon: "drafts",
      operation: () => console.log("unimplemented")
    }
  ];

  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef(null);

  const RenderItem = ({ item }) => {
    
    
    return (
      <TouchableWithoutFeedback>
        <Image
          source={item.image}
          style={{ width: 360, height: 240, borderRadius: 10 }}
        />
      </TouchableWithoutFeedback>
    );
  };

  const [dragRange, setDragRange] = useState({
    top: height - 80,
    bottom: 160,
  });

  const _draggedValue = new Animated.Value(180);
   function navigateToSendTokens() {
    navigation.navigate('SendTokens')
  }
  const ModalRef = useRef(null);

  return (
    <SafeAreaView style={[SharedStyle.container, {backgroundColor: 'white'}]}>
      <View>
        <View style={[SharedStyle.header,  {paddingTop: 45}]}>
          
          <Text style={SharedStyle.TitleText}>Welcome back,</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.profile}>
            <Image
              source={{
                uri:
                  "https://scontent.fagc1-2.fna.fbcdn.net/v/t31.0-8/20017494_1570223453010098_2798752839256677297_o.jpg" +
                  "?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=Y_mZcslnbsIAX95p6tF&_nc_ht=scontent.fagc1-2.fna&oh=78f39c7c6e0d85e6e503587f409c6d20&oe=603CC6F9",
              }}
              style={styles.ProfileImage}
            />
            <Text style={{ color: "black", paddingLeft: 20}}>
              Account ID
            </Text>
            <View style={styles.ProfileImageNotification}></View>
        {/*<View style={{ backgrounColor: 'white', justifyContent: 'center', paddingLeft: 515, paddingTop: 490, alignItems: 'center', flex: 1, position: 'absolute'}}>
        <TouchableOpacity style={{ position: 'absolute', paddingBottom: 10, backgroundColor: 'white'}}>
         {/*} <View style={styles.profile}>*/
           
           /* </View>*/
           /*} <Text 
            style={{ color: "black", paddingLeft: 20}}>
              Account ID
            </Text>*/}
            <View style={styles.ProfileImageNotification}></View>
          </View>
        </TouchableOpacity>
        </View>

        <View style={{paddingBottom: 100}}>
          <View style={SharedStyle.CardDisplay}>
            <FlatList
              contentContainerStyle={SharedStyle.CardContentList}
              horizontal
              disableScrollViewPanResponder
              data={Operations}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={item.operation}>
                    <View style={SharedStyle.AddUser}>
                      <View style={SharedStyle.AddUserIconbg}>
                        <MaterialIcons
                          name={item.icon}
                          color="white"
                          size={28}
                        />
                      </View>
                      <Text style={SharedStyle.CardText}>
                        {item.text}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />

            <FlatList
             style={{paddingBottom: 10}}
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
       
      
     {/*<Container style={{ flex: 1, flexDirection: 'column', width:400, height: 70, paddingTop: 0}}>*/}
       <View style={{paddingTop:50, width: 400, paddingLeft: 0, paddingRight: 60, backgroundColor: 'white'}}>
        <Footer style={{backgroundColor: 'white'}}>
                    <Title style={{ color: 'black', fontWeight: 'bold'}}>Footer</Title>
                </Footer>
                </View>
              {/*} </Container>*/}
              
              
              </View>
       {/* <SlidingUpPanel
          
          ref={ModalRef}
          draggableRange={dragRange}
          animatedValue={_draggedValue}
          backdropOpacity={0}
          snappingPoints={[360]}
          height={height + 20}
          friction={0.9}
        >
          <View style={styles.SlideUp}>
            <View style={styles.PanelHandle}></View>
            <View>
              <Text style={{ marginVertical: 16, color: "black" }}>
                Recent Transactions
              </Text>
            </View>
            <View style={{ height: 500, paddingBottom: 10 }}>
              <FlatList
                data={Users.slice(0, 6)}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.PanelItemContainer}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <View style={{ marginRight: 10 }}>
                          <Image
                            source={{ uri: item.userImage }}
                            style={styles.PanelImage}
                          />
                        </View>
                        <View>
                          <Text style={{ fontSize: 14, color: "black" }}>
                            {item.userName}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              color: "black",
                              opacity: 0.6,
                            }}
                          >
                            {item.transactionDate}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            color: "black",
                            marginHorizontal: 2,
                          }}
                        >
                          {item.amount}{" "}
                        </Text>

                        {item.credit ? (
                          <MaterialIcons
                            name="arrow-drop-up"
                            size={22}
                            color="green"
                          />
                        ) : (
                          <MaterialIcons
                            name="arrow-drop-down"
                            size={22}
                            color="#ff3838"
                          />
                        )}
                      </View>
                    </View>
                  );
                }}

                //view history
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <TouchableOpacity style={SharedStyle.PanelButton}>
                <Text style={SharedStyle.PanelButtonText}>
                  View Full History
                </Text>
              </TouchableOpacity>
            </View>
          </View>
              </SlidingUpPanel>*/}
             
  </SafeAreaView>
  );
};

export default Home;
