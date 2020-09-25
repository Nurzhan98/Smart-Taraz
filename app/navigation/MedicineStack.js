import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MedicineScreen from '../screens/MedicineScreen';
import MedCategory from '../screens/MedCategory';
import MedOrganization from '../screens/MedOrganization';

const Stack = createStackNavigator(); 

export const MedicineStack = () => {
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
        name="MedicineScreen" 
        component={ MedicineScreen }
        options={ ({navigation}) => ({
          headerShown: false
        })}
      />
      <Stack.Screen 
        name="MedCategory" 
        component={ MedCategory }
        options={ ({navigation}) => ({
          headerShown: false
        })}
      />
      <Stack.Screen 
        name="MedOrganization" 
        component={ MedOrganization }
        options={ ({navigation}) => ({
          headerShown: false
        })}
      />
    </Stack.Navigator>
  );
}