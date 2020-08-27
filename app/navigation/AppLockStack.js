import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignInSplashScreen from '../screens/SignInSplashScreen';
import SplashScreen from '../screens/SplashScreen'; 
import AppLockScreen from '../screens/AppLockScreen'; 
import SignUpScreen from '../screens/SignUpScreen';   

const Stack = createStackNavigator();

export const AppLockStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="AppLockScreen" 
        component={ AppLockScreen }
        options={ ({navigation}) => ({
          headerShown: false
        })}
        
      />
    </Stack.Navigator>
  );
}