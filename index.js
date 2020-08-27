/**
 * @format
 */
import React from 'react'
import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
YellowBox.ignoreWarnings([
    'Warning: componentWillMount',
    'Warning: componentWillReceiveProps',
    '-[RCTRootView cancelTouches]',
    'Warning: componentWillUpdate',
    'Invalid prop `text` of type `object`',
    'Warning: DatePickerIOS has been merged',
    'Calling bridge.imageLoader is deprecated',
    '[react-native-modalize] `withReactModal`',
    'Remote debugger is in a background tab',
    'VirtualizedLists should never be nested',
  ]);
  


AppRegistry.registerComponent(appName, () => App);
 