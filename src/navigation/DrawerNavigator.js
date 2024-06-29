
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import Library from '../screens/Library';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Learning Hub" component={StackNavigator} />
        <Drawer.Screen name="Library" component={Library} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
