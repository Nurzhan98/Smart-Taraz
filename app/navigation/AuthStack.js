import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignInSplashScreen from '../screens/SignInSplashScreen';
import SplashScreen from '../screens/SplashScreen'; 
import AppLockScreen from '../screens/AppLockScreen'; 
import SignUpScreen from '../screens/SignUpScreen';   

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Splash" 
        component={ SplashScreen }
        options={ ({navigation}) => ({
          headerShown: false
        })}
        
      />
      <Stack.Screen 
        name="SignIn" 
        component={ SignInSplashScreen }
        options={ ({navigation}) => ({
          headerShown: false
        })}
        
      />
      <Stack.Screen 
        name="SignUp" 
        component={ SignUpScreen }
        options={ ({navigation}) => ({
          headerShown: false
        })}
        
      />
      <Stack.Screen 
        name="AppLockScreen" 
        component={ AppLockScreen }
        options={ ({navigation}) => ({
          headerShown: false
        })}
        
      />
      {/* <Stack.Screen 
        name="Auth" 
        component={ AuthScreen }
        options={ ({navigation}) => ({
          title: 'Регистрация'
        })}
      /> */}
    </Stack.Navigator>
  );
}