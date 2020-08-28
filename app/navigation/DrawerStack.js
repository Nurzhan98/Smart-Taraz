import { createDrawerNavigator } from '@react-navigation/drawer';
import React from "react";
import {  StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerContent from '../screens/DrawerContent';
import { Button, Text, Block } from 'react-native-paper'
import { CitiesStack } from './CitiesStack';
import { ServicesStack } from './ServicesStack';

Icon.loadFont()

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

const Screens = ({ navigation, style}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: () => (
          <Text  style={styles.title}>TARAZ CITY</Text>
        ),
        headerLeft: () => (
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={18} color="#fff"  />
          </Button>
        ),
      }}>
      <Stack.Screen name="CitiesStack">{props => <CitiesStack  {...props} />}</Stack.Screen>
      <Stack.Screen name="Services">{props => <ServicesStack {...props} />}</Stack.Screen>
    </Stack.Navigator>
  );
};


export const DrawerStack = () => {
  return (
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        drawerContent={props => { 
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 25
  },
  titleWrap:{
    marginTop: 10,
    alignItems: 'center',
  },
})
