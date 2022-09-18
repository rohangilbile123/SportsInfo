import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';

import moment from 'moment';
import {API_KEY} from '../../config/config';

const NewsList = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getCategory = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=08e317903af9444babcd75db935bcbf5',
      );
      const json = await response.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <View>
      <View style={{marginTop: 10, marginLeft: 10, width: 370}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            numColumns={1}
            //numColumns={2}
            //keyExtractor={({ catId }, index) =>catId}
            keyExtractor={item => item.source.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(item.url);
                }}>
                <View
                  style={{
                    width: '100%',
                    backgroundColor: 'aliceblue',
                    marginBottom: 8,
                  }}>
                  <View>
                    <Image
                      source={{uri: item.urlToImage}}
                      style={{width: '100%', height: 170, resizeMode: 'cover'}}
                    />
                    <Text
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: 14,
                        fontWeight: '500',
                        color: 'black',
                        marginLeft: 4,
                        marginRight: 4,
                        textAlign: 'center',
                      }}>
                      {item.title}
                    </Text>
                  </View>

                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: 'black',
                      paddingTop: 2,
                      marginHorizontal: 10,
                    }}></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      height: 36,
                    }}>
                    <Text
                      style={{
                        margin: 5,
                        fontStyle: 'italic',
                        color: 'black',
                        fontSize: 12,
                      }}>
                      {item.source.name.toUpperCase()}
                    </Text>
                    <Text
                      style={{
                        margin: 5,
                        fontStyle: 'italic',
                        color: 'black',
                        fontSize: 12,
                      }}>
                      {moment(item.publishedAt || moment.now()).fromNow()}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default NewsList;
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
    paddingLeft: 30,
  },
  dropdown: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingBottom: 5,
    color: 'rgba(0, 0, 0, 1)',
  },
});
