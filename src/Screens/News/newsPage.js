import * as React from 'react';
import {
  StyleSheet
} from 'react-native';
import NewsList from './newsList';

const NewsPage = ({navigation, route}) => {
  return (
         <NewsList />
  );
};


export default NewsPage;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F7F7F7',
  },
  containertwo: {
    flexDirection: 'row',
    
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
