import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
             alignItems: 'center',
             display: 'flex',
             flexDirection:'row'
        }}>
        <Image source={require('../../Assets/rG.png')} 
            style={{width:120,height:50, marginLeft: 2}} />
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 28,
            fontWeight: '500',
            color: 'black',
            textAlign: 'center',
            paddingTop: 10,
            paddingLeft: 24,
            paddingBottom:10
          }}>
            SportsInfo
        </Text>
      </View>
      <View style={{marginHorizontal: 14}}>
       <Text style={{
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
       }}> A place to know about your favorite sports</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
const styles = StyleSheet.create({
  container: {
   backgroundColor: 'lightsalmon',
    paddingTop:2,
    paddingBottom:2
  },
});
