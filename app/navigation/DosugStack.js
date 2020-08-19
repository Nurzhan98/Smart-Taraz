import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DosugScreen from '../screens/DosugScreen';
import InterestingPlace from '../screens/InterestingPlace';
import Institution from '../screens/Institution';

const Stack = createStackNavigator(); 

export const DosugStack = () => {
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
        name="DosugService" 
        component={ DosugScreen }
        options={ ({navigation}) => ({
          headerShown: false
        })}
      />
      <Stack.Screen 
        name="InterestingPlace" 
        component={ InterestingPlace }
        options={ ({navigation}) => ({
          headerShown: false
        })}
      />
      <Stack.Screen 
        name="Institution" 
        component={ Institution }
        options={ ({navigation}) => ({
          headerShown: false
        })}
      />
    </Stack.Navigator>
  );
}