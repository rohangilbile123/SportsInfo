import * as React from 'react';
import { View, Text, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity,StyleSheet } from 'react-native';
import { Card, TextInput, Divider,RadioButton } from 'react-native-paper';

const BookAppointment = ({navigation}) => {

    const [checked, setChecked] = React.useState('first');
    return (

        <KeyboardAvoidingView style={styles.keyboardview}>
            <ScrollView>
                <View style={{ flex: 1 }}>
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
                    {/* <Text style={styles.header}>Appointments</Text> */}
                    <Card style={styles.card}>
                        <Card.Content >
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>Video Consultaion</Text>
                            <Text style={{ fontSize: 10, paddingBottom: 10 }}>Includes Audio, Video and Chat</Text>
                            <View style={{ flexDirection: 'row' }}><Text style={{ fontSize: 12, textAlign: 'center', fontWeight: 'bold' }}>On April 12, 2022 </Text><Text style={{ textAlign: 'center', fontSize: 12, fontWeight: 'bold' }}>     At time 9:30 AM</Text></View>
                            <TouchableOpacity style={{ paddingVertical: 5 }}>
                                <Text style={{ fontSize: 10, color: '#E75755', textDecorationLine: 'underline' }}>Change Date & Time</Text>
                            </TouchableOpacity>
                            <Divider style={{}}></Divider>

                            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                <View style={{ paddingRight: 5, flex: 1 }}>
                                    <Image style={{ resizeMode: 'contain', width: '100%', height: 90 }} source={require('../../Assets/Doctor2.png')}></Image>
                                    <View style={{ backgroundColor: 'green', borderRadius: 20, width: 22, top: -18, alignSelf: 'center' }}>
                                        <Image source={require('../../Assets/Done2.png')} />
                                    </View>
                                    <TouchableOpacity onPress={()=> navigation.navigate('ProviderProfile')}  style={{ top: -18 }}>
                                        <Text style={{ textAlign: 'center', fontSize: 10, textDecorationLine: 'underline', color: '#E75755' }}>View Profile</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 3, marginHorizontal: 5 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Dr. Rohit M More</Text>
                                    <Text style={{ fontSize: 12 }}>Dentist</Text>
                                    <Text style={{ fontSize: 12, fontWeight: '900' }}>Experience:<Text style={{ fontWeight: 'normal' }}>5 years</Text></Text>
                                    <Text style={{ fontSize: 12, fontWeight: '900' }}><Text>Chavdhari Nagar,Pune</Text><Text style={{ fontWeight: 'normal' }}> | My Clinic</Text></Text>
                                    <Text style={{ fontSize: 12, fontWeight: '900' }}><Text>₹1000 </Text><Text style={{ fontWeight: 'normal' }}>Consultaion Fees at Clinic</Text></Text>
                                    <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 3 }}>
                                        <Image style={{ height: 16, width: 16, marginHorizontal: 1 }} source={require('../../Assets/star.png')} />
                                        <Image style={{ height: 16, width: 16, marginHorizontal: 1 }} source={require('../../Assets/star.png')} />
                                        <Image style={{ height: 16, width: 16, marginHorizontal: 1 }} source={require('../../Assets/star.png')} />
                                        <Image style={{ height: 16, width: 16, marginHorizontal: 1 }} source={require('../../Assets/star.png')} />
                                        <Image style={{ resizeMode: 'contain', marginHorizontal: 1 }} source={require('../../Assets/star1.png')} />
                                        <Text style={{ textDecorationLine: 'underline', fontSize: 12, marginLeft: 10 }}>306 Patient Stories</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ top: -18 }}>
                                <Text style={{ width: '100%', fontSize: 12, color: 'rgba(0, 0, 0, 1)' }}>Chavdhari Nagar ,Pune</Text>
                                <Text style={{ width: '100%', fontSize: 12, color: '#E75755' }}>My Clinic</Text>
                                <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                    <Text style={{ fontSize: 12, fontWeight: '400', color: 'rgba(0, 0, 0, 1)' }}>4.5</Text>
                                    <Image style={{ height: 16, width: 16, marginHorizontal: 1 }} source={require('../../Assets/star.png')} />
                                    <Image style={{ height: 16, width: 16, marginHorizontal: 1 }} source={require('../../Assets/star.png')} />
                                    <Image style={{ height: 16, width: 16, marginHorizontal: 1 }} source={require('../../Assets/star.png')} />
                                    <Image style={{ height: 16, width: 16, marginHorizontal: 1 }} source={require('../../Assets/star.png')} />
                                    <Image style={{ resizeMode: 'contain', marginHorizontal: 1 }} source={require('../../Assets/star1.png')} />
                                </View>
                                <Text style={{ width: '100%', fontSize: 12 }}>302 center point  building,3rd floor, 18th road,near Ambedkar Gardern,Landmark: Opposite to SBI Bank & Near Ambedkar Gardern,Pune</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13, color: '#E75755', textDecorationLine: 'underline', }}>Get Direction</Text>
                                </TouchableOpacity>
                            </View>
                        </Card.Content>
                    </Card>
                    <View style={{ paddingLeft: 30, marginTop: 10 }}>
                        <Text style={{ fontSize: 16 }}>Patient Details</Text>
                        <Text style={{ width: '100%', fontSize: 13, color: "rgba(90, 86, 87, 1)", marginTop: 5 }}>This in-clinc appointment is for:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <RadioButton color='red' value="first" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} /><Text style={{ fontSize: 13 }}>Rutika</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                                <RadioButton value="second" color='red' status={checked === 'second' ? 'checked' : 'unchecked'} uncheckedColor='rgba(158, 158, 158, 1)' onPress={() => setChecked('second')} /><Text style={{ fontSize: 13 }}>Someone else</Text>
                            </View>
                        </View>
                        <Text style={{ width: '100%', fontSize: 13 }}>Please provide following information about Patient:</Text>
                        {checked === 'first' && (
                            <View>
                                <TextInput mode='outlined' outlineColor='white' placeholder='Full Name*' style={{ width: '70%', marginVertical: 4, marginTop: 15, fontSize: 13, height: 28 }} />
                                <TextInput mode='outlined' outlineColor='white' placeholder='Mobile Number*' style={{ width: '70%', marginVertical: 4, fontSize: 13, height: 28 }} />
                                <TextInput mode='outlined' outlineColor='white' placeholder='Enter your Email ID(Optional)' style={{ width: '70%', marginVertical: 4, fontSize: 13, height: 28 }} />
                            </View>
                        )}
                        {checked === 'second' && (
                            <View>
                                <TextInput mode='outlined' outlineColor='white' placeholder='Enter Patient Full Name*' style={{ width: '70%', marginVertical: 4, marginTop: 15, fontSize: 13, height: 28 }} />
                                <TextInput mode='outlined' outlineColor='white' placeholder='Enter Patient Mobile Number*' style={{ width: '70%', marginVertical: 4, fontSize: 13, height: 28 }} />
                                <TextInput mode='outlined' outlineColor='white' placeholder='Enter Your Mobile Number*' style={{ width: '70%', marginVertical: 4, fontSize: 13, height: 28 }} />
                            </View>
                        )}
                        <TouchableOpacity onPress={() => navigation.navigate('PaymentMode')} style={{ backgroundColor: '#E75755', marginVertical: 10, paddingHorizontal: 1, paddingVertical: 3, borderRadius: 6, justifyContent: 'center', width: 100,height:28, alignItems: 'center', }}>
                            <Text style={{ color: 'white' }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default BookAppointment;

const styles = StyleSheet.create({
    keyboardview:{ flex: 1, backgroundColor: '#E5E5E5' },
    header:{ textAlign: 'center', fontSize: 24, fontWeight: '600', padding: 2,marginTop:8, marginBottom:8,color:'rgba(17, 75, 95, 1)' },
    card:{ borderRadius: 30, marginHorizontal: 20, backgroundColor: '#FFFFFF' },

});
