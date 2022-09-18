import React from 'react';
import { View,Text} from 'react-native';
import Routes from './src/Navigations/Routes';


import  HomePage  from './src/Screens/Home/homePage';
//import Explore from './src/Screens/Explore/explore';
import BottomTabNavigator from './src/Navigations/bottomTabNavigator';
//import DrawerNavigator from './src/Navigations/drawerNavigator';



const App = () => {
  return (
    <View style={{flex:1}}>
    <Routes />
    {/* <BottomTabNavigator /> */}
    {/* <DrawerNavigator /> */}
    </View>
  );
};

// const App = () => {
//   return (
//     <SafeAreaView  style={{backgroundColor:'#E5E5E5'}}>
//       <ScrollView>
            
//           <View style={
//             styles.sectionTwo
//           }>  
//            </View> 
//            <Appointment1b/>      
//         </ScrollView>
//     </SafeAreaView>
//   );
// };



export default App;
