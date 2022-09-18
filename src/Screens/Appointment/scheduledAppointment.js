import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card, Title, Divider} from 'react-native-paper';
//import { Divider } from '@react-native-material/core';

const ScheduledAppointment = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 12,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{color: 'rgba(17, 75, 95, 0.6'}}
            onPress={() => navigation.goBack()}>
            <Image
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767515-1502579.png',
              }}
              style={{
                width: 32,
                height: 24,
                marginLeft: 18,
              }}
              tintColor="rgba(17, 75, 95, 0.6)"></Image>
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
      {/* <Text style={styles.header_1}>Appointments</Text> */}
      <Card
        style={{
          borderRadius: 40,
          justifyContent: 'center',
          marginHorizontal: 8,
        }}>
        <View style={{marginTop: 5, marginBottom: 20}}>
          <Card.Title
            titleStyle={styles.title_1}
            title="Your Appointment is Scheduled."
            subtitleStyle={styles.subtitle_1}
            subtitle="Apointment Id:51245789545215"
          />

          <Divider
            style={{width: '70%', alignSelf: 'center', marginBottom: 8}}
          />

          <Card.Content
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title_2}>Video Consultaion</Text>
            <Text style={styles.subtitle_2}>Includes Audio,Video and Chat</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text_1}>On April 12,2022</Text>
              <Text style={styles.text_1}>At time 9:30 AM</Text>
            </View>
            <TouchableHighlight style={{margin: 5}}>
              <Text
                style={{
                  color: 'rgba(231,87,85,1)',
                  fontSize: 10,
                  textDecorationLine: 'underline',
                }}>
                Change Date & Time
              </Text>
            </TouchableHighlight>
          </Card.Content>

          <Divider style={{width: '90%', alignSelf: 'center', marginTop: 8}} />

          <Card.Content style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={{resizeMode: 'contain', width: '100%'}}
                source={require('../../Assets/Doctor2.png')}
              />
              <View
                style={{
                  backgroundColor: 'green',
                  borderRadius: 20,
                  bottom: 40,
                  width: 22,
                  alignSelf: 'center',
                }}>
                <Image source={require('../../Assets/Done2.png')} />
              </View>
              <Text
                style={{
                  marginTop: 6,
                  color: 'rgba(231,87,85,1)',
                  bottom: 40,
                  textDecorationLine: 'underline',
                  textDecorationColor: 'rgba(231,87,85,1)',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                View Profile
              </Text>
            </View>
            <View style={{flex: 3, paddingHorizontal: 10, marginTop: 20}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Dr. Rohit M More
              </Text>
              <Text style={{fontSize: 12, paddingTop: 2}}>Dentist</Text>
              <Text style={{fontSize: 12, fontWeight: '900', paddingTop: 2}}>
                Experience: <Text style={{fontWeight: 'normal'}}>5 years</Text>
              </Text>
              <Text style={{fontSize: 12, fontWeight: '900', paddingTop: 2}}>
                Chavdhari Nagar,Pune |{' '}
                <Text
                  style={{color: 'rgba(231, 87, 85, 1)', fontWeight: 'normal'}}>
                  My Clinic
                </Text>
              </Text>
              <Text style={{fontSize: 12, paddingTop: 2}}>
                302 Centre Point Building 3rd Floor,18th Road, Near Ambedkar
                Garden, Landmark Opposite to SBI Bank & Near Ambedkar Gardern
                Pune
              </Text>
              <Text style={{fontSize: 12, paddingTop: 2}}>
                <Text style={{fontWeight: '900', paddingTop: 2}}>₹1000 </Text>
                Consultaion Fee at Clinic
              </Text>
              <TouchableHighlight>
                <View style={{flexDirection: 'row', paddingTop: 2}}>
                  <Image
                    style={{height: 16, width: 16}}
                    source={require('../../Assets/star.png')}
                  />
                  <Image
                    style={{height: 16, width: 16}}
                    source={require('../../Assets/star.png')}
                  />
                  <Image
                    style={{height: 16, width: 16}}
                    source={require('../../Assets/star.png')}
                  />
                  <Image
                    style={{height: 16, width: 16}}
                    source={require('../../Assets/star.png')}
                  />
                  <Image
                    style={{resizeMode: 'contain', marginRight: 10}}
                    source={require('../../Assets/star1.png')}
                  />
                  <Text style={{fontSize: 12, textDecorationLine: 'underline'}}>
                    306 Patient Stories
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </Card.Content>

          <View
            style={{
              paddingBottom: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <TouchableHighlight
              onPress={() => navigation.navigate('AppointmentList')}
              style={{
                paddingHorizontal: 5,
                marginHorizontal: 4,
                paddingVertical: 10,
                backgroundColor: 'rgba(90, 86, 87, 0.81)',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                View Appointment
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
            onPress={() => navigation.navigate('BookAppointment')}
              style={{
                paddingHorizontal: 5,
                marginHorizontal: 4,
                paddingVertical: 10,
                backgroundColor: 'rgba(231,87,85,1)',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontSize: 12}}>
                Book Another Appointment
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigation.navigate('HomePage')}
              style={{
                paddingHorizontal: 5,
                marginHorizontal: 4,
                paddingVertical: 10,
                backgroundColor: 'rgba(231,87,85,1)',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontSize: 12}}>Go To Home</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Card>
    </SafeAreaView>
  );
};
export default ScheduledAppointment;

const styles = StyleSheet.create({
  header_1: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 27,
    fontWeight: '500',
    color: 'rgba(17, 75, 95, 1)',
    marginVertical: 10,
    opacity: 0.5,
  },
  title_1: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    margin: 20,
    color: 'rgba(231, 87, 85, 1)',
  },
  subtitle_1: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textAlign: 'center',
    margin: 5,
    fontSize: 15,
    fontWeight: '700',
    color: 'rgba(107, 100, 105, 1)',
  },
  title_2: {
    color: 'rgba(90, 86, 87, 1)',
    fontSize: 13,
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  subtitle_2: {
    fontSize: 9,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  text_1: {
    flex: 1,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    color: 'rgba(90, 86, 87, 1)',
  },
});
