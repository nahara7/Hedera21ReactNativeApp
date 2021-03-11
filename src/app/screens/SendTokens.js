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
import { Alert } from "react-native";
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

const getRecipientInfo= async (recAccountId)=>{
    console.log("getting recipient Id")
    console.log(recAccountId)
    let recId="";
  const base = new Airtable({
    apiKey:"AIRTABLE_API_KEY",
  }).base('AIRTABLE_BASE_KEY');
  const table = base('Users'); 
 
  const options = {
    filterByFormula: `AND(accountID = '${recAccountId}')`,
  };
  users =  await data.getAirtableRecords(table, options);
  {/*filter !*/}
   users.filter(user =>{
    if (user.get("accountID") === recAccountId){
    //console.log(user.get("accountID"))
    console.log(user.get("userId")+ "this is the recipient userId")
    recId=user.get("userId")
    //return user.get("userId")
    }else{
      Alert.alert("User does not exist")
      console.log("didn't find user")
      setErrortext("User does not exist");
      }
     
    })
  
    return recId; 
};
 const getUserFirstName=(recId)=>{
  console.log("getting user first name")
  console.log(recId)
  let  firstname=null;
    return fetch ('https://still-coast-11655.herokuapp.com/api/v1.0/account/userFirstName',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

       baseId: recId 
    })
   }) .then((response)=> response.text()
      .then((responseName)=>{
        console.log('getting firstname')
        firstname=responseName.toString();
        console.log(firstname);
        return firstname
      })
      .catch((error)=>{
        console.error(error)
      }),
      
   )
  
  };
  

const transaction =  ( userId, recId, recName, transactionToken, transactionAmount, transactionMemo) => {
  console.log("executing")
  console.log(userId)
  console.log(recId)

  return fetch ('https://still-coast-11655.herokuapp.com/api/v1.0/transaction/userUser',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      senderId:  userId,
      recipientId: recId,
      fee: '1'
      //memo optional
    })
   }) .then((response)=> response.json()
      .then((responseJson)=>{
        console.log('getting receipt')
        var status=responseJson.status;
        console.log(status);
        console.log(recName)
        paymentAlert(responseJson.status, recName)
        
      })
      .catch((error)=>{
        console.error(error)
      }),
   )};
   //return userId
    
 
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


  
  
  
  const [vendorId, setVendorId] = useState("");
  const [memo, setMemo] = useState("");
  const [token, setToken] = useState("");
  const[amount, setAmount]= useState("");
   const[recipientAccountId, setRecipientAccountId]= useState("");
  
   

  const vendorIdInputRef = createRef();
  const tokenIdInputRef = createRef();
  const memoInputRef = createRef();
  const amountInputRef = createRef();
  const user = useUser()
  var recipientName='save';
  var recipientId="save";
   function handleTransaction(){
    console.log('handleTransaction')
    
     getRecipientInfo(recipientAccountId)
     .then((RecipientId)=>{
      setRecipientId(RecipientId)
     
     
        
      })
      console.log(recipientName + "handle Transaction")
    
  
  function setRecipientId(RecId){
    console.log("setting Id")
     recipientId=RecId;
    getUserFirstName(recipientId)
    .then((UserFirstName)=>{
      setRecipientName(UserFirstName)
  
   }
    )};
    
  
  function setRecipientName(name){
    console.log(recipientName)   
    recipientName=name;
    console.log("set recipientName" + recipientName)
    console.log(recipientId + "back at handle")
    console.log({userId: user.id,recipientId, recipientName, token, amount, memo})
    transaction(user.id,recipientId,recipientName, token, amount, memo)
      .then(() => {})
  }
};
function handleRecipientAccountId(){
  console.log("getting recipient account info"),
  getRecipientInfo(recipientAccountId)
  .then((RecipientId)=>{
    setRecipientId(RecipientId)
})};
  return (
    <SafeAreaView style={[SharedStyle.container, {backgroundColor: 'white'}]}>
      <View style={[SharedStyle.header, {paddingTop:20, paddingLeft: 20}]}>
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
      

      <View style={[styles.form, {paddingBottom: 40}]}>
        
      <View style={SharedStyle.InputView}>
          <TextInput
            style={SharedStyle.InputText}
            placeholder="Recipient Account Id"
            placeholderTextColor="white"
            onChangeText={
              (RAccountID)=> setRecipientAccountId(RAccountID)}
            onSubmitEditing={  handleRecipientAccountId,
              ()=>tokenIdInputRef.current && tokenIdInputRef.current.focus()}
            blurOnSubmit={false} 
          />
        </View>
        <View style={SharedStyle.InputView}>
          <TextInput
            style={SharedStyle.InputText}
            placeholder="Token Name"
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
