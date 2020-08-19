import React, {Component} from "react";
import  {DrawerStack}  from "./DrawerStack";
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from "./AuthStack";
import { connect } from 'react-redux';
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
      </NavigationContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state.authReducer.userToken
  }
}

export default connect(mapStateToProps)(RootStackScreen);

    
    

  
