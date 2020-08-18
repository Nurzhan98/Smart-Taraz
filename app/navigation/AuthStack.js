import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import AuthScreen from '../screens/AuthScreen';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SignIn" 
        component={ SignInScreen }
        options={ ({navigation}) => ({
          headerShown: false
        })}
        
      />
      <Stack.Screen 
        name="Auth" 
        component={ AuthScreen }
        options={ ({navigation}) => ({
          title: 'Регистрация'
        })}
      />
    </Stack.Navigator>
  );
}