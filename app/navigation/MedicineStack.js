import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MedicineScreen from '../screens/MedicineScreen';

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
    </Stack.Navigator>
  );
}