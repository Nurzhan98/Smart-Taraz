/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component} from 'react';
import  RootStackScreen  from './app/navigation/RootStack';



const App = class App extends Component {
  render() {
    return (
      <RootStackScreen />
    )
  }
};

export default App;
