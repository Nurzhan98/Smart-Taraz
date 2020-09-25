import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CrimeMap from '../screens/CrimeMap';
import SafeRoutes from '../screens/SafeRoutes';
import SafeSchools from '../screens/SafeSchools';
import Addresses from '../screens/Addresses';
import EmergencyCalls from '../screens/EmergencyCalls';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CityService from '../screens/CityService';
import News from '../screens/News';
import ServicesCityScreen from '../screens/ServicesCityScreen';

Icon.loadFont()

const Stack = createStackNavigator(); 

export const CitiesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerRight: () => (
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="keyboard-backspace" size={18} color="#fff"  />
          </Button>
        ),
      }}
    >
      <Stack.Screen 
        name="SignIn" 
        component={ ServicesCityScreen }
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
      <Stack.Screen 
        name="CityService" 
        component={ CityService }
        options={ ({navigation}) => ({
          title: 'CityService'
        })}
      />
      <Stack.Screen 
        name="News" 
        component={ News }
        options={ ({navigation}) => ({
          title: 'News'
        })}
      />
    </Stack.Navigator>
  );
}