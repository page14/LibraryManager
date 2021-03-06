import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from  './Screens/BookTransactions';
import SearchScreen from './Screens/SearchScreen';
import LoginScreen from './Screens/LoginScreen';
import * as firebase from 'firebase';
export default class App extends React.Component {
  render(){
  return (
      <AppContainer />
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen : TransactionScreen},
  Search : {screen : SearchScreen},
  
},
{
defaultNavigationOptions : ({navigation})=>({
  tabBarIcon:()=>{
    const routeName = navigation.state.routeName
    if(routeName === 'Transaction'){
     return (
       <Image source = {require("./assets/book.png")} style={{width: 50 , height: 50}}/>
     ) 
    }

    else if (routeName === 'Search'){
      return(
<Image source = {require("./assets/searchingbook.png")} style={{width: 50 , height: 50}}/>

      )
    }
  }
})
}
  )


  const switchNavigator = createSwitchNavigator({
    LoginScreen:{screen: LoginScreen},
    TabNavigator:{screen: TabNavigator}
    })


const AppContainer = createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
