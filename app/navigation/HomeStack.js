import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import AuthScreen from '../screens/AuthScreen';
import Home from '../screens/Home';
import CrimeMap from '../screens/CrimeMap';
import StreetLight from '../screens/StreetLight';
import SafeRoutes from '../screens/SafeRoutes';
import SafeSchools from '../screens/SafeSchools';
import Addresses from '../screens/Addresses';
import EmergencyCalls from '../screens/EmergencyCalls';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SignIn" 
        component={ Home }
        options={ ({navigation}) => ({
          headerShown: false
        })}
        
      />
      <Stack.Screen 
        name="CrimeMap" 
        component={ CrimeMap }
        options={ ({navigation}) => ({
          title: 'CrimeMap'
        })}
      />
      <Stack.Screen 
        name="StreetLight" 
        component={ StreetLight }
        options={ ({navigation}) => ({
          title: 'StreetLight'
        })}
      />
      <Stack.Screen 
        name="SafeRoutes" 
        component={ SafeRoutes }
        options={ ({navigation}) => ({
          title: 'SafeRoutes'
        })}
      />
      <Stack.Screen 
        name="SafeSchools" 
        component={ SafeSchools }
        options={ ({navigation}) => ({
          title: 'SafeSchools'
        })}
      />
      <Stack.Screen 
        name="Addresses" 
        component={ Addresses }
        options={ ({navigation}) => ({
          title: 'Addresses'
        })}
      />
      <Stack.Screen 
        name="EmergencyCalls" 
        component={ EmergencyCalls }
        options={ ({navigation}) => ({
          title: 'EmergencyCalls'
        })}
      />
    </Stack.Navigator>
  );
}