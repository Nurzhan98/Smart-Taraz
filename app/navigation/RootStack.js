import React, {Component} from "react";
import  {DrawerStack}  from "./DrawerStack";
import  {AuthStack}  from "./AuthStack";

import { NavigationContainer } from '@react-navigation/native';
import Loader from "../components/Loader";
import { observer, inject } from 'mobx-react'
import { AppLockStack } from "./AppLockStack";
import AsyncStorage from '@react-native-community/async-storage';

@inject('store')
@observer
export default class  RootStackScreen extends Component {
  state = {
    visible: true,
    loading: false,
    showLock: false
  }
  componentDidMount() {
    this.setState({loading: false})
  }

  componentWillMount() {
    const getStorage = async () => {
      let isStorageTrue = false
      try {
        isStorageTrue = await AsyncStorage.getItem('Password')
      } catch (error) {
        console.log(error)
      }
      if(isStorageTrue) {
        this.setState({showLock: true})
      }
    }
    getStorage()
  }

  

  render() {
    const {visible, loading, showLock} = this.state
    const { userToken } = this.props.store
    let stack = showLock ? <AppLockStack />  : <AuthStack />
    if(userToken) {
      stack = <DrawerStack />
    }
    return (
      <NavigationContainer>
        {stack}
        {
          loading && <Loader />
        }
      </NavigationContainer>
    )
  }
}

    
    

  
