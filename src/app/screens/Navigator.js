import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';

import UserProvider from '../../user/UserProvider';

import Home from './HomeScreen';
import Login from './Login';
import SendTokens from './SendTokens.js';
import SettingsScreen from'./SettingsScreen.js';
import Contacts from './Wallet/Contacts'
import SignUp from './SignUp.js';
//import PayVendor from './PayVendor.js';

import { Colors } from 'react-native/Libraries/NewAppScreen';


const Drawer = createDrawerNavigator();

export default function Navigator() {

  const [user, setUser] = useState(null);

  return (
    <UserProvider user={user}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#ff8500',
          fontColor: "black",
          fontStyle: "bold"
        }}
        drawerContentOptions={{
          activeTintColor: "#ff6d00",
          //activeTintColor: 
          //activeBackgroundColor: Colors.orange,

        }}
        >
          {user === null ? (
            <>
           
              <Drawer.Screen name="Login">
                {(props) => <Login {...props} setUser={setUser}
                
                />}
                 
              </Drawer.Screen>
              <Drawer.Screen name="SignUp" component={SignUp} />
            </>
          ) : (
            <>
              {/* <UserProvider user={user} /> if you need to propagate user data through context */}
              <Drawer.Screen name="Home" component={Home} />
              {/*<Drawer.Screen name="Contacts" component={Contacts} />*/}
              <Drawer.Screen name="SendTokens" component={SendTokens} />
             {/* <Drawer.Screen name="Settings" component={SettingsScreen} />*/}
              {/*<Drawer.screen name="Pay Vendor" component={PayVendor}/>*/}
              
               
              
              {/* Redeem */}
              {/* Scan */}
            </>
          )}
          
        </Drawer.Navigator>
     </NavigationContainer>
    </UserProvider>
  )
}
