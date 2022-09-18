import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './bottomTabNavigator';
const Stack = createNativeStackNavigator();

function Routes () {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='BottomTabNavigator' screenOptions={{headerShown:false}}>
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}  /> 
        </Stack.Navigator>
      </NavigationContainer>
    )   
};

export default Routes;