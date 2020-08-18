import React, {Component} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import  {DrawerStack}  from "./DrawerStack";
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from "./AuthStack";
import { connect } from 'react-redux';
import {ActivityIndicator} from 'react-native'
import { View } from "native-base";
import Loader from "../components/Loader";


class  RootStackScreen extends Component {
  state = {
    visible: true
  }
  render() {
    const {visible} = this.state
    let userToken = this.props.userToken
    let stack = <AuthStack />
    let loader
    if(userToken) {
      stack = <DrawerStack />
      loader = <Loader />
      setTimeout(() => loader = null, 1000)
    }
    console.log(userToken) 
    return (
      <NavigationContainer>
        {stack} 
        {/* {loader} */}
      </NavigationContainer>
      // {loader}
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state.authReducer.userToken
  }
}

export default connect(mapStateToProps)(RootStackScreen);

    
    

  
