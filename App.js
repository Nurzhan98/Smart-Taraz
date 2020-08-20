/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component} from 'react';
import  RootStackScreen  from './app/navigation/RootStack';
import  { Provider } from 'mobx-react'
import AppStore from './app/stores/LoginStore';

const store = window.store = new AppStore()

const App = class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <RootStackScreen />
      </Provider>
    )
  }
};

export default App;
