import React  from 'react';
import {Text, View, Image, TouchableOpacity , StyleSheet, ScrollView} from 'react-native';
//import AppointmentHeader from '../../Components/HeaderComponent/appointmentHeader';

const SearchProviders = ({navigation}) => {

  return (
    <View>
         {/* <AppointmentHeader /> */}
          <View >
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 12,
            alignItems: 'center',
          }}>
      
          <TouchableOpacity style={{color:'rgba(17, 75, 95, 0.6'}} onPress={()=> navigation.goBack()} >
          <Image
            source={{
              uri: 'https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767515-1502579.png',
            }}
            style={{
              width: 32,
              height: 24,
              marginLeft: 18,  
            }}
            tintColor='rgba(17, 75, 95, 0.6)'></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 27,
              fontWeight: '500',
              color: '#114B5F',
              textAlign: 'center',
              paddingLeft: 90,
            }}>
          Appointments
          </Text>
        </View>
      </View>

        <View style={styles.containertwo}>
        <Text
          style={{
            fontWeight: '400',
          }}>
          Pune
        </Text>
        <TouchableOpacity>
        <Image
          source={{
            uri: 'https://img.icons8.com/material-sharp/344/sort-down.png',
          }}
          style={styles.dropdown}
        />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', marginLeft: 10,marginTop:10,marginBottom:10}}>
          <View style={{backgroundColor:'white', width: 120,height: 40, flexDirection:'row', borderRadius:15, alignItems:'center',marginRight:8}}>
              <Text style={{paddingLeft: 6, color:'rgba(0, 0, 0, 1)', }}>
                  By Availability
              </Text>
              <TouchableOpacity style={{paddingLeft:4,paddingRight:2}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/material-sharp/344/sort-down.png',
                 }}
               style={styles.dropdown}
                />
               </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'white', width: 120,height: 40, flexDirection:'row', borderRadius:15, alignItems:'center',marginRight:8}}>
              <Text style={{paddingLeft: 10, color:'rgba(0, 0, 0, 1)'}}>
                 All Filters
              </Text>
              <TouchableOpacity style={{paddingLeft: 26,paddingRight:2}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/material-sharp/344/sort-down.png',
                 }}
               style={styles.dropdown}
                />
               </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'white', width: 110,height: 40, flexDirection:'row', borderRadius:15, alignItems:'center'}}>
              <Text style={{paddingLeft: 10, color:'rgba(0, 0, 0, 1)'}}>
                  Sort
              </Text>
              <TouchableOpacity style={{paddingLeft:34,paddingRight:2}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/material-sharp/344/sort-down.png',
                 }}
               style={styles.dropdown}
                />
               </TouchableOpacity>
          </View>
      </View>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       <View style={{marginLeft:15,marginRight:10, marginBottom:10}}>      
           <View style={{
             width:550,
             height: 163,
             backgroundColor:'#FFFFFF',
           // backgroundColor:'yellow',
            // flexDirection: 'row',
            // justifyContent: 'flex-start',  
            // alignItems: 'center',
             marginRight:20
             
            }}>
             <View style={{padding:8}}>
                 <Text style={{color:'rgba(0, 0, 0, 1)'}}>Available for Online consultation</Text>
                 </View>
              <View style={{flexDirection:'row'}}>
              <View style={{             
            }} >
              <Image source={require('../../Assets/Doctor.png')} style={{
                 width:60,
                 height:80,
                 borderRadius: 14,
                 marginLeft:14
                 }}/>  
                
                 <TouchableOpacity onPress={() => navigation.navigate('ProviderProfile')} style={{marginLeft:8, marginTop:10}}>
                    <Text style={{textDecorationLine:'underline', color:'rgba(231, 87, 85, 1)'}}> View Profile
                    </Text>
                </TouchableOpacity>      
            </View>
            <View style={{ marginLeft:16,}} >
               <Text style={{fontSize:12, fontWeight:'600'}}>My Clinic</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Dr. Rohit M More</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>MBBS</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Experience : 5 years</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Pune</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Online/Walk-in booking starts from ₹1000</Text>
            </View>

            <View style={{marginLeft: 40}}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('BookAppointment')} style={{padding:8,width: 160,backgroundColor:'#EF5757', borderRadius:7}}>
                     <View><Text style={{textAlign:'center' ,color:'#FFFFFF'}}>Book Appointment</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:8,width: 160, backgroundColor:'#44D4F4', borderRadius:7, marginTop:4}}>
                     <View><Text style={{textAlign:'center' ,color:'#FFFFFF'}}>Video Consult</Text></View>
                    </TouchableOpacity>
                </View>
               <View style={{flexDirection:'row', paddingTop:10,justifyContent:'center'}}>
              <TouchableOpacity>
              <View>
                   <Image source={require('../../Assets/Favorite.png')} style={{
                        width:24,
                        height:24,
                 }}/>  
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View>
                   <Image source={require('../../Assets/Share.png')} style={{
                        width:24,
                        height:24,
                 }}/>  
                </View>
              </TouchableOpacity>
            <TouchableOpacity>
            <View>
                   <Image source={require('../../Assets/Picture.png')} style={{
                        width:24,
                        height:24,
                 }}/>  
                </View>
            </TouchableOpacity>
                 </View>
            </View>
              </View>
            {/* <View style={{ 
              paddingLeft:10       
             }}>
            <Text style={{
              fontFamily:'Poppins',
              fontWeight:'500',
              fontSize:27
            }}>
                Dr.shruti
            </Text>
             <Text>
               * * * * *
            </Text>
             <Text style={{
              fontFamily:'Poppins',
              fontWeight:'500',
              fontSize:18
            }} >
               Dentist
            </Text>
            </View > */}
            </View>
       </View>
       </ScrollView>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       <View style={{marginLeft:15,marginRight:10, marginBottom:10}}>      
           <View style={{
             width:550,
             height: 163,
             backgroundColor:'#FFFFFF',
           // backgroundColor:'yellow',
            // flexDirection: 'row',
            // justifyContent: 'flex-start',  
            // alignItems: 'center',
             marginRight:20
             
            }}>
             <View style={{padding:8}}>
                 <Text style={{color:'rgba(0, 0, 0, 1)'}}>Available for Online consultation</Text>
                 </View>
              <View style={{flexDirection:'row'}}>
              <View style={{             
            }} >
              <Image source={require('../../Assets/Doctor.png')} style={{
                 width:60,
                 height:80,
                 borderRadius: 14,
                 marginLeft:14
                 }}/>  
                
                 <TouchableOpacity onPress={() => navigation.navigate('ProviderProfile')} style={{marginLeft:8, marginTop:10}}>
                    <Text style={{textDecorationLine:'underline', color:'rgba(231, 87, 85, 1)'}}> View Profile
                    </Text>
                </TouchableOpacity>      
            </View>
            <View style={{ marginLeft:16,}} >
               <Text style={{fontSize:12, fontWeight:'600'}}>My Clinic</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Dr. Rohit M More</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>MBBS</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Experience : 5 years</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Pune</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Online/Walk-in booking starts from ₹1000</Text>
            </View>

            <View style={{marginLeft: 40}}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('BookAppointment')} style={{padding:8,width: 160,backgroundColor:'#EF5757', borderRadius:7}}>
                     <View><Text style={{textAlign:'center' ,color:'#FFFFFF'}}>Book Appointment</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:8,width: 160, backgroundColor:'#44D4F4', borderRadius:7, marginTop:4}}>
                     <View><Text style={{textAlign:'center' ,color:'#FFFFFF'}}>Video Consult</Text></View>
                    </TouchableOpacity>
                </View>
               <View style={{flexDirection:'row', paddingTop:10,justifyContent:'center'}}>
              <TouchableOpacity>
              <View>
                   <Image source={require('../../Assets/Favorite.png')} style={{
                        width:24,
                        height:24,
                 }}/>  
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View>
                   <Image source={require('../../Assets/Share.png')} style={{
                        width:24,
                        height:24,
                 }}/>  
                </View>
              </TouchableOpacity>
            <TouchableOpacity>
            <View>
                   <Image source={require('../../Assets/Picture.png')} style={{
                        width:24,
                        height:24,
                 }}/>  
                </View>
            </TouchableOpacity>
                 </View>
            </View>
              </View>
            {/* <View style={{ 
              paddingLeft:10       
             }}>
            <Text style={{
              fontFamily:'Poppins',
              fontWeight:'500',
              fontSize:27
            }}>
                Dr.shruti
            </Text>
             <Text>
               * * * * *
            </Text>
             <Text style={{
              fontFamily:'Poppins',
              fontWeight:'500',
              fontSize:18
            }} >
               Dentist
            </Text>
            </View > */}
            </View>
       </View>
       </ScrollView>
       
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       <View style={{marginLeft:15,marginRight:10, marginBottom:10}}>      
           <View style={{
             width:550,
             height: 163,
             backgroundColor:'#FFFFFF',
           // backgroundColor:'yellow',
            // flexDirection: 'row',
            // justifyContent: 'flex-start',  
            // alignItems: 'center',
             marginRight:20
             
            }}>
             <View style={{padding:8}}>
                 <Text style={{color:'rgba(0, 0, 0, 1)'}}>Available for Online consultation</Text>
                 </View>
              <View style={{flexDirection:'row'}}>
              <View style={{             
            }} >
              <Image source={require('../../Assets/Doctor.png')} style={{
                 width:60,
                 height:80,
                 borderRadius: 14,
                 marginLeft:14
                 }}/>  
                
                 <TouchableOpacity onPress={() => navigation.navigate('ProviderProfile')} style={{marginLeft:8, marginTop:10}}>
                    <Text style={{textDecorationLine:'underline', color:'rgba(231, 87, 85, 1)'}}> View Profile
                    </Text>
                </TouchableOpacity>      
            </View>
            <View style={{ marginLeft:16,}} >
               <Text style={{fontSize:12, fontWeight:'600'}}>My Clinic</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Dr. Rohit M More</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>MBBS</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Experience : 5 years</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Pune</Text>
               <Text style={{fontSize:12, fontWeight:'600'}}>Online/Walk-in booking starts from ₹1000</Text>
            </View>

            <View style={{marginLeft: 40}}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('BookAppointment')} style={{padding:8,width: 160,backgroundColor:'#EF5757', borderRadius:7}}>
                     <View><Text style={{textAlign:'center' ,color:'#FFFFFF'}}>Book Appointment</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:8,width: 160, backgroundColor:'#44D4F4', borderRadius:7, marginTop:4}}>
                     <View><Text style={{textAlign:'center' ,color:'#FFFFFF'}}>Video Consult</Text></View>
                    </TouchableOpacity>
                </View>
               <View style={{flexDirection:'row', paddingTop:10,justifyContent:'center'}}>
              <TouchableOpacity>
              <View>
                   <Image source={require('../../Assets/Favorite.png')} style={{
                        width:24,
                        height:24,
                 }}/>  
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View>
                   <Image source={require('../../Assets/Share.png')} style={{
                        width:24,
                        height:24,
                 }}/>  
                </View>
              </TouchableOpacity>
            <TouchableOpacity>
            <View>
                   <Image source={require('../../Assets/Picture.png')} style={{
                        width:24,
                        height:24,
                 }}/>  
                </View>
            </TouchableOpacity>
                 </View>
            </View>
              </View>
            {/* <View style={{ 
              paddingLeft:10       
             }}>
            <Text style={{
              fontFamily:'Poppins',
              fontWeight:'500',
              fontSize:27
            }}>
                Dr.shruti
            </Text>
             <Text>
               * * * * *
            </Text>
             <Text style={{
              fontFamily:'Poppins',
              fontWeight:'500',
              fontSize:18
            }} >
               Dentist
            </Text>
            </View > */}
            </View>
       </View>
       </ScrollView>

       
    </View>
         
  );
};

export default SearchProviders;
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  containertwo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingTop: 8,
    paddingLeft: 40,
  },
  dropdown: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    textAlign:'center',
    textAlignVertical:'center',
    paddingBottom:5,
    color:'rgba(0, 0, 0, 1)'
  },
});