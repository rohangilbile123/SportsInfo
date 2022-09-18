import * as React from 'react';
import { Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stats = () => {
    return (
        <View >
            <Text>Stats</Text>
        </View>
    );
};

const Rules = () => {
    return (
        <View >
            <Text>Rules</Text>
        </View>
    );
};

const Competition = () => {
    return (
        <View >
            <Text>Competition</Text>
        </View>
    );
};

const TopPlayers = () => {
    return (
        <View style={{justifyContent:'center',alignItems:'center',height:200}} >
            <Text style={{textAlign:'center'}}>Top Players</Text>
        </View>
    );
};


const Tab = createMaterialTopTabNavigator();

const ProviderDataSlider=() =>{
    return (

        <View style={{flex:1,marginHorizontal:10,backgroundColor:'#E5e5e5'}}>
            <Tab.Navigator   screenOptions={{
                tabBarLabelStyle: { fontSize: 8 },
                tabBarItemStyle: { width:95 },
  }}>
                <Tab.Screen name="Stats" component={Stats} />
                <Tab.Screen name="Rules" component={Rules} />
                <Tab.Screen name="Competition" component={Competition} />
                <Tab.Screen name="TopPlayers" component={TopPlayers} />
            </Tab.Navigator>
        </View>

    );
}

export default ProviderDataSlider;
