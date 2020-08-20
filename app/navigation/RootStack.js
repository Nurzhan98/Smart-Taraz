import React, {Component} from "react";
import  {DrawerStack}  from "./DrawerStack";
import  {AuthStack}  from "./AuthStack";

import { NavigationContainer } from '@react-navigation/native';
import Loader from "../components/Loader";
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
export default class  RootStackScreen extends Component {
  state = {
    visible: true,
    loading: false
  }
  componentDidMount() {
    this.setState({loading: false})
  }

  render() {
    const {visible, loading} = this.state
    const { userToken } = this.props.store
    let stack = <AuthStack />
    if(userToken) {
      stack = <DrawerStack />
    }
    console.log(userToken) 
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

    
    

  
