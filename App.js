/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component} from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import {Button, Root} from 'native-base';
import SignInScreen from './app/screens/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './app/navigation/AuthStack';
import  RootStackScreen  from './app/navigation/RootStack';
import { Provider } from 'react-redux';
import { DrawerStack } from './app/navigation/DrawerStack';



const App = class App extends Component {
  render() {
    return (
      <RootStackScreen />
    )
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#09104C',
    flex: 1
  }
});

export default App;
