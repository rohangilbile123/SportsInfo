import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HomeHeader from '../../Components/HeaderComponent/homeHeader';

const HomePage = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <HomeHeader />
      <View style={{marginTop:18}}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 27,
            fontWeight: '500',
            color: 'black',
            paddingLeft: 20,
            
          }}>
          Top Sports
        </Text>
      </View>

      <View
        style={{
          // height: 130,
          marginTop: 8,
          marginLeft: 10,
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         <TouchableOpacity onPress={() => navigation.navigate('SearchProviders')} >
         <View
            style={{
              width: 160,
              height: 100,
              backgroundColor: 'gray',
              // flexDirection: 'row',
              justifyContent: 'flex-start',
              borderRadius: 30,
              alignItems: 'center',  
              marginHorizontal: 6   
            }}>
            <View >
              <Image
                source={require('../../Assets/sports/cricket.png')}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  marginLeft: 14,
                }}
              />
            </View>
            <View
              style={{
                
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  fontSize: 26,
                  color:'black'
                }}>
                Cricket
              </Text>
            </View>
          </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('SearchProviders')} >
         <View
            style={{
              width: 160,
              height: 100,
              backgroundColor: 'gray',
              // flexDirection: 'row',
              justifyContent: 'flex-start',
              borderRadius: 30,
              alignItems: 'center', 
              marginHorizontal: 6     
            }}>
            <View >
              <Image
                source={require('../../Assets/sports/football.png')}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  marginLeft: 14,
                }}
              />
            </View>
            <View
              style={{
                
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  fontSize: 26,
                  color:'black'
                }}>
                Football
              </Text>
            </View>
          </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('SearchProviders')} >
         <View
            style={{
              width: 160,
              height: 100,
              backgroundColor: 'gray',
              // flexDirection: 'row',
              justifyContent: 'flex-start',
              borderRadius: 30,
              alignItems: 'center', 
              marginHorizontal: 6     
            }}>
            <View >
              <Image
                source={require('../../Assets/sports/basketball.png')}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  marginLeft: 14,
                }}
              />
            </View>
            <View
              style={{
                
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  fontSize: 26,
                  color:'black'
                }}>
                Basketball
              </Text>
            </View>
          </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('SearchProviders')} >
         <View
            style={{
              width: 160,
              height: 100,
              backgroundColor: 'gray',
              // flexDirection: 'row',
              justifyContent: 'flex-start',
              borderRadius: 30,
              alignItems: 'center', 
              marginHorizontal: 6     
            }}>
            <View >
              <Image
                source={require('../../Assets/sports/hockey.png')}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  marginLeft: 14,
                }}
              />
            </View>
            <View
              style={{
                
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  fontSize: 26,
                  color:'black'
                }}>
                Hockey
              </Text>
            </View>
          </View>
         </TouchableOpacity> 
        </ScrollView>
      </View>

      <View style={{ marginTop: 18}}>
        <View style={{marginLeft: 8}}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 27,
            fontWeight: '500',
            color: 'black',
            paddingLeft: 20,
          }}>
          Categories
        </Text>
        </View>

        <View style={{marginLeft :12 ,display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
        <View style={{marginHorizontal:6, marginTop: 6}}>
        <View style={{width:110,height:120,backgroundColor: 'turquoise',borderRadius:8, padding:6, display:'flex'}} >
        <Image source={require('../../Assets/sports/indoor.png')} 
            style={{width:100,height:58, tintColor:'white',marginTop:2}} />
        <Text style={{
           color:'white',
           fontSize: 20,
           paddingLeft:16
        }}>In-Door Sports</Text>
        </View>
        </View>

        <View style={{marginHorizontal:6, marginTop: 6}}>
        <View style={{width:110,height:120,backgroundColor: 'turquoise',borderRadius:8, padding:6, display:'flex'}} >
        <Image source={require('../../Assets/sports/outdoor.png')} 
            style={{width:100,height:58, tintColor:'white',marginTop:2}} />
        <Text style={{
           color:'white',
           fontSize: 20,
           paddingLeft:16
        }}>Out-Door Sports</Text>
        </View>
        </View>

        <View style={{marginHorizontal:6, marginTop: 6}}>
        <View style={{width:110,height:120,backgroundColor: 'turquoise',borderRadius:8, padding:6, display:'flex'}} >
        <Image source={require('../../Assets/sports/singlePlayer.png')} 
            style={{width:100,height:58, tintColor:'white',marginTop:2}} />
        <Text style={{
           color:'white',
           fontSize: 20,
           paddingLeft:16
        }}>Single - Player</Text>
        </View>
        </View>

        <View style={{marginHorizontal:6, marginTop: 6}}>
        <View style={{width:110,height:120,backgroundColor: 'turquoise',borderRadius:8, padding:6, display:'flex'}} >
        <Image source={require('../../Assets/sports/multiPlayer.png')} 
            style={{width:100,height:58, tintColor:'white',marginTop:2}} />
        <Text style={{
           color:'white',
           fontSize: 20,
           paddingLeft:16
        }}>Multi - Player</Text>
        </View>
        </View>

        <View style={{marginHorizontal:6, marginTop: 6}}>
        <View style={{width:110,height:120,backgroundColor: 'turquoise',borderRadius:8, padding:6, display:'flex'}} >
        <Image source={require('../../Assets/sports/netGames.png')} 
            style={{width:100,height:58, tintColor:'white',marginTop:2}} />
        <Text style={{
           color:'white',
           fontSize: 20,
           paddingLeft:16
        }}>Net Games</Text>
        </View>
        </View>
        </View>
      </View>
      
      <View style={{backgroundColor:'red', marginHorizontal:8, marginTop:8, borderRadius:4}}>
        <Text style={{
          color:'white',
          fontFamily:'Poppins',
          fontSize: 20,
          fontWeight:'500',      
          fontStyle: 'italic',
          textAlign:'center',
          paddingBottom:8
        }}>
          To Compete big, we first must know the games
        </Text>
      </View>

      <View style={{alignItems:'center', marginTop:12}}>
      <Image source={require('../../Assets/sports/tricolor.png')} 
            style={{width:60,height:50}} />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F7F7F7',
  },
  containertwo: {
    flexDirection: 'row',
    // alignItems: 'center',
    height: 40,
    paddingTop: 8,
    paddingLeft: 30,
  },
  dropdown: {
    width: 20,
    height: 15,
    resizeMode: 'stretch',
  },
});
