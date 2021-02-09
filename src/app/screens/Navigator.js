import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './HomeScreen';
import Login from './Login';
import SendTokens from './SendTokens.js';
import SettingsScreen from'./SettingsScreen.js';

//fix navigator and do not import navigator in other classes
//must determine how to implement into homescreen so that you can 
//move from opacity buttons.
//perhaps make a seperate stack navigator for the homescreen to go to 
//wallet pages  Feb 2 2021

// const NavStack= createDrawerNavigator({
//   Settings: {screen: SettingsScreen},
//   SendTokens:{screen: SendTokens},
//     //Home: {screen: Home},
//   }, {
//       //initialRouteName:'Home',
//       contentOptions:{
//       activeTintColor: '#e91e63',
//       drawerBackgroundColor: "#f4511e",
//       drawerPosition: 'left',
//       overLayColor: "transparent"
//     }
//  });

const Drawer = createDrawerNavigator();

export default function Navigator() {
  // User | null
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {user === null ? (
          <>
            <Drawer.Screen name="Login">
              {(props) => <Login setUser={setUser} />}
            </Drawer.Screen>
          </>
        ) : (
          <>
            {/* <UserProvider user={user} /> if you need to propagate user data through context */}
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="SendTokens" component={SendTokens} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            {/* Redeem */}
            {/* Scan */}
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
