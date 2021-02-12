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
import Airtable from 'airtable'
const data = require('./DataController.js');

const paymentAlert=(status, name)=>{
if(status=='SUCCESS'){
  Alert.alert(
    status,
    "Payment Successful to "+ name,)
}else{
  Alert.alert(
    status,
  )

}
}

const getRecipientInfo=async (recAccountId)=>{
 
  const base = new Airtable({
    apiKey:"keykefT9YD5rhkuFg",
  }).base('appg4L9uWpNhonYHS');
  const table = base('Users'); 
 
  const options = {
    filterByFormula: (accountID = '${recAccountId}'),
  };
  const users = await data.getAirtableRecords(table, options);

  const filteredUsers = users.filter((user) =>
    user.get("accountId") === recAccountId);
     console.log(user.get("accountId"))
     console.log(user.get("userId"))
    if(user!=undefined){
     return user.get("userId")
    } 
};
 const getUserFirstName=(recId)=>{
  fetch ('https://still-coast-11655.herokuapp.com/api/v1.0/account/userFirstName',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

       baseId: recId 
    })
   }) .then((response)=> response.json()
      .then((responseJson)=>{
        console.log('getting firstname')
        var firstname=responseJson.status;
        console.log(firstname);
        
      })
      .catch((error)=>{
        console.error(error)
      }),
   )};
  

const transaction =  ( userId, recipientId, transactionToken, transactionAmount, transactionMemo) => {
  console.log('executing')
  fetch ('https://still-coast-11655.herokuapp.com/api/v1.0/transaction/userUser',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      userId: userId,
      vendorId: recipientId,
      fee: transactionAmount
      //memo optional
    })
   }) .then((response)=> response.json()
      .then((responseJson)=>{
        console.log('getting receipt')
        var status=responseJson.status;
        console.log(status);
        //name-->alert
        getUserFirstName(recipientId).then((recName)=>
        setRecipientName(recName))
        
        paymentAlert(responseJson.status, recipientName)
        
      })
      .catch((error)=>{
        console.error(error)
      }),
   )};

 
  export default SendTokens=({Navigation})=>{  
 
    /*function navigateToContacts() {
      Navigation.navigate('Contacts')
    }*/
  
    const Operations = [
 
 
  {
    key: "1",
    text: "Vendor",
    icon: "storefront",
    //vendor transaction page
    operation: () => console.log("unimplemented")
  },
  {


    
    key: "2",
    text: "Contact",
    icon: "supervisor-account",
    //navigate to contacts
    operation: ()=> console.log("unimplmented")
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
  const [recipientName, setRecipientName]=useState("");
  const[recipientAccountId, setRecipientAccountId]= useState("");
  const[recipientId, setRecipientId]=useState("");



  const vendorIdInputRef = createRef();
  const tokenIdInputRef = createRef();
  const memoInputRef = createRef();
  const amountInputRef = createRef();
  const user = useUser()
  
  
  function handleTransaction(){
    console.log('starting transaction')
    getRecipientInfo(recipientAccountId).then((RecipientId)=>{
      setRecipientId(RecipientId)
    })
    console.log({userId: user.id, token, amount, memo})
    transaction(user.id,recipientId, token, amount, memo)
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
            placeholder="Recipient Account Id"
            placeholderTextColor="white"
            onChangeText={(RAccountID)=> setRecipientAccountId(RAccountID)}
            onSubmitEditing={
              ()=>tokenIdInputRef.current && tokenIdInputRef.current.focus()}
            blurOnSubmit={false} 
          />
        </View>
        <View style={SharedStyle.InputView}>
          <TextInput
            style={SharedStyle.InputText}
            placeholder="Choose Token"
            placeholderTextColor="white"
            onChangeText={(Token)=> setToken(Token)}
            ref={tokenIdInputRef}
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
  )};
