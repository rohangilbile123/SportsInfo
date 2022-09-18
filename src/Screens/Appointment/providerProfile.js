import React from 'react';
import {  Text, View, Image, TouchableOpacity , StyleSheet, TouchableHighlight} from 'react-native';
import ProviderDataSlider from '../../Components/ProviderDataSlider/providerDataSlider';

const ProviderProfile = ({navigation}) => {
  return (
    <View style={{flex:1}}>
    <View>
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
      <View style={{marginLeft:15,marginRight:10, marginBottom:10, marginTop:10}}>      
           <View style={{
             width:'100%',
             height: 190,
             backgroundColor:'#FFFFFF',
             marginRight:20
             
            }}>
              <View style={{flexDirection:'row', marginTop: 10}}>
              <View style={{             
            }} >
              <Image source={require('../../Assets/Doctor.png')} style={{
                 width:80,
                 height:110,
                 borderRadius: 10,
                 marginLeft:14,
                 
                 
                 }}/>        
            </View>
            <View style={{ marginLeft:20, width:160}} >
               <Text style={{fontSize:16, fontWeight:'600', color:'rgba(90, 87, 86, 1)',marginTop:2}}>Dr Rohit M More</Text>
               <Text style={{fontSize:11, fontWeight:'600', color: 'rgba(90, 86, 86, 1)',marginTop:2}}>MBBS</Text>
               <Text style={{fontSize:12, fontWeight:'600', color:'rgba(90, 86, 86, 1)',marginTop:2}}>Location : Dadar Tilak Nagar </Text>
               <Text style={{fontSize:12, fontWeight:'600', color:'rgba(90, 86, 86, 1)',marginTop:2}}>Experience : 5 years</Text>
               {/* <View style={{flexDirection:'row', alignItems:'center'}}>
               <Image source={require('../../Assets/Done.png')} style={{ width:10, height:10 }}/> 
               <Text style={{fontSize:12, fontWeight:'600'}}>Medical Registration Verified</Text>
               </View> */}
               <View style={{flexDirection:'row', alignItems:'center',marginTop:2}}>
               <Image source={require('../../Assets/shape1.png')} style={{ width:10, height:10 }}/> 
               <Text style={{fontSize:12, fontWeight:'600'}}> Medical Registration Verified</Text>
               </View>
               <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly',marginTop:2}}>
               <Image source={require('../../Assets/shape1.png')} style={{ width:10, height:11 }}/> 
               <Image source={require('../../Assets/shape1.png')} style={{ width:10, height:11 }}/> 
               <Image source={require('../../Assets/shape1.png')} style={{ width:10, height:11 }}/> 
               <Image source={require('../../Assets/shape1.png')} style={{ width:10, height:11 }}/> 
               <Image source={require('../../Assets/Vector.png')} style={{ width:10, height:11 }}/> 
               <View style={{borderBottomWidth:1,borderBottomColor:'rgba(231, 87, 85, 1)'}}><Text style={{fontSize:12, fontWeight:'600', paddingLeft:4}}>200 Patient stories</Text></View>
               </View>
            </View>
               
               <View style={{marginLeft:24}}>
               <TouchableHighlight> 
                   <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center', borderBottomWidth:1,borderBottomColor:'rgba(231, 87, 85, 1)'}}>
                   <Image source={require('../../Assets/Share.png')} style={{ width:20, height:20, tintColor:'red' }}/> 
                   <Text style={{color:'rgba(231, 87, 85, 1)'}}>Share</Text>
                    </View>
                    </TouchableHighlight>
               </View>

              </View>
             <View style={{marginLeft: 8,paddingTop: 10, flexDirection:'row',alignItems:'center'}}>
              {/* <Text style={{paddingLeft: 10,fontSize:12, textDecorationLine:'underline',color:'rgba(231, 87, 85, 1)'}}>Show More</Text>
                <Text style={{paddingLeft:8, marginLeft:4,fontSize:10,color:'rgba(33, 150, 83, 1)'}}>Available Today</Text>  */}
                 <View>
                    <TouchableOpacity >
                     <View><Text style={{paddingLeft: 10,fontSize:10, textDecorationLine:'underline',color:'rgba(231, 87, 85, 1)' }}>Show More</Text></View>
                    </TouchableOpacity>
               </View>
                <View><Text style={{paddingLeft:8, marginLeft:4,fontSize:10,color:'rgba(33, 150, 83, 1)' }}>Available Today</Text></View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('BookAppointment')} style={{width: 100,height:40 ,backgroundColor:'#EF5757', marginLeft:4 ,borderRadius:7}}>
                     <View><Text style={{textAlign:'center' ,color:'#FFFFFF'}}>Book Appointment</Text></View>
                    </TouchableOpacity>
               </View>
               <View>
                    <TouchableOpacity style={{width: 100, height:40, justifyContent:'center', alignItems:'center',  backgroundColor:'#44D4F4', borderRadius:7, marginLeft:4}}>
                     <View><Text style={{textAlign:'center' ,color:'#FFFFFF',padding:2}}>Video Consult</Text></View>
                    </TouchableOpacity>
                </View>
             </View>
            </View>
       </View>     
    </View>
   <ProviderDataSlider /> 
   </View>
         
  );
};
export default ProviderProfile;
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