import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useState, createRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../styles/SendTokens";
import SharedStyle from "../styles/shared";
import { Entypo } from '@expo/vector-icons';

import { Share } from "react-native";
import useUser from '../../user/useUser';
import { Navigation } from "react-native-navigation";


const transaction =  ( userId,  transactionToken, transactionAmount, transactionMemo) => {
  let user='recoBCkJWolsRETIr' 
  console.log('executing')
  fetch ('https://still-coast-11655.herokuapp.com/api/v1.0/transaction/userVendor',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      userId,
      vendorId:'recg5IEL4f2QNLkHK' ,
      fee: '1',
      //memo optional
    })
   }) .then((response)=> response.json()
      .then((responseJson)=>{
        console.log('getting receipt')
        var status=responseJson.status;
        console.log(status);
        return responseJson.status;
      })
      .catch((error)=>{
        console.error(error)
      }),
   )}

 
  export default SendTokens=({Navigation})=>{  
 
    function navigateToContacts() {
      Navigation.navigate('Contacts')
    }
  
    const Operations = [
 
 
  {
    key: "1",
    text: "Vendor",
    icon: "storefront",
    operation: () => console.log("unimplemented")
  },
  {


    
    key: "2",
    text: "Contact",
    icon: "supervisor-account",
    operation: navigateToContacts
  },
  {
    key: "3",
    text: "Scan",
    icon: "qr-code-scanner",
    operation: () => console.log("unimplemented")
  }
];

//export default SendTokens = () => {
  
  
  
  const [vendorId, setVendorId] = useState("");
  const [memo, setMemo] = useState("");
  const [token, setToken] = useState("");
  const[amount, setAmount]= useState("");

  const vendorIdInputRef = createRef();
  const tokenIdInputRef = createRef();
  const memoInputRef = createRef();
  const amountInputRef = createRef();
  const user = useUser()
  
  
  function handleTransaction(){
    console.log('starting transaction')
    //will add vendor Id
    console.log({userId: user.id, token, amount, memo})
    transaction(user.id, token, amount, memo)
      .then(() => {})
  }
  
  
  return (
    <SafeAreaView style={[SharedStyle.container, {backgroundColor: 'white'}]}>
      <View style={[SharedStyle.header, {paddingTop:45, paddingLeft: 20}]}>
        <Text style={SharedStyle.TitleText}>
              Send Tokens
        </Text>
      </View>

      <View style={SharedStyle.CardDisplay}>
        <FlatList
          contentContainerStyle={SharedStyle.CardContentList}
          horizontal
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
      </View>

      <View style={[styles.form, {paddingBottom: 45}]}>
        <View style={SharedStyle.InputView}>
          <TextInput
            style={SharedStyle.InputText}
            placeholder="Choose Token"
            placeholderTextColor="white"
            onChangeText={(Token)=> setToken(Token)}
            onSubmitEditing={()=>amountInputRef.current && amountInputRef.current.focus()}
            blurOnSubmit={false} 
          />
        </View>
        <View style={SharedStyle.InputView}>
          <TextInput
            style={SharedStyle.InputText}
            placeholder="Amount"
            ref={amountInputRef}
            placeholderTextColor="white"
            onChangeText={(Amount)=> setAmount(Amount)}
            onSubmitEditing={()=>memoInputRef.current && memoInputRef.current.focus()}
          />
        </View>
        <View style={SharedStyle.InputView}>
          <TextInput
            style={SharedStyle.InputText}
            ref={memoInputRef}
            placeholder="Memo (Optional)"
            placeholderTextColor="white"
            onChangeText={(Memo)=> setAmount(Memo)}
            
          />
        </View>
        <TouchableOpacity style={SharedStyle.PanelButton} onPress={handleTransaction}>
          <Text style={SharedStyle.PanelButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};