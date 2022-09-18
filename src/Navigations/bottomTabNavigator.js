import * as React from 'react';
import { Text, View, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage , NewsPage} from '../Screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle:{position:'absolute', backgroundColor:'rgba(250, 250, 250, 1)', height:60, borderTopLeftRadius:40, borderTopRightRadius:40}}}>
      <Tab.Screen name="Home" component={HomePage} 
         options={{
          tabBarLabel:() => {return null},
          tabBarIcon: ({focused})=> {
               return(
                   <Image source={require('../Assets/BottomTab/home.png')} style={{width:30,height:30, tintColor: focused ? 'black': 'gray'}} />
               )
          }       
        }} />

      <Tab.Screen name="NewsPage" component={NewsPage}
          options={{
            tabBarLabel:() => {return null},
            tabBarIcon: ({focused})=> {
                 return(
                     <Image source={require('../Assets/sports/news.png')} style={{width:60,height:40, tintColor: focused ? 'black': 'gray'}} />
                 )
            }       
          }} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default BottomTabNavigator;
