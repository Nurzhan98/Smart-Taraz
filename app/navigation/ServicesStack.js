import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Addresses from '../screens/Addresses';
import EmergencyCalls from '../screens/EmergencyCalls';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CityService from '../screens/CityService';
import News from '../screens/News';
import Servives from '../screens/Servives';
import PublicTransport from '../screens/PublicTransport'
import Submission from '../screens/Submission';
import { DosugStack } from './DosugStack';
import { MedicineStack } from './MedicineStack';

Icon.loadFont()

const Stack = createStackNavigator(); 

export const ServicesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="keyboard-backspace" size={18} color="#fff"  />
          </Button>
        ),
      }}
    >
      <Stack.Screen 
        name="Servives" 
        component={ Servives }
        options={ ({navigation}) => ({
          headerShown: false
        })}
        
      />
      <Stack.Screen 
        name="PublicTransport" 
        component= { PublicTransport }
        options={ ({navigation}) => ({
          title: 'PublicTransport'
        })}
      />
      <Stack.Screen 
        name="Submission" 
        component={ Submission }
        options={ ({navigation}) => ({
          title: 'Submission'
        })}
      />
      <Stack.Screen 
        name="DosugStack" 
        component={ DosugStack }
        options={ ({navigation}) => ({
          title: 'SafeRoutes'
        })}
      />
      <Stack.Screen 
        name="MedicineStack" 
        component={ MedicineStack }
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