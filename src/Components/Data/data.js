import React from 'react';
import { View, Text ,Image, TouchableOpacity} from 'react-native';
import moment from 'moment';

const defaultJSONData = {
	source: {
		id: 'fox-news',
		name: 'Fox News'
	},
	author: null,
	title:
		"Jeff Bezos' investigator believes 'government entity' may have obtained texts: WashPo reporter - Fox News",
	description:
		'A security consultant for Amazon founder and Washington Post owner Jeff Bezos believes the CEO’s lurid intimate photos may have been acquired by a "government entity," a reporter at the paper said Thursday.',
	url:
		'https://www.foxnews.com/tech/jeff-bezos-investigator-believes-government-entity-obtained-texts-wapo-reporter',
	urlToImage:
		'https://media2.foxnews.com/BrightCove/694940094001/2019/02/08/694940094001_5999770984001_5999767526001-vs.jpg',
	publishedAt: '2019-02-08T07:52:57Z',
	content:
		'A security consultant for Amazon founder and Washington Post owner Jeff Bezos believes the CEO’s lurid intimate photos may have been acquired by a "government entity," a reporter at the paper said Thursday. Manuel Roig-Franzia, the reporter, told MSNBC that w… [+1410 chars]'
};

const NewsData = () => {
		const time = moment(defaultJSONData.publishedAt || moment.now()).fromNow();
		return (
			  <TouchableOpacity>
				<View style={{ 
					  marginTop:12,
                      backgroundColor:'gray'
                       }}>     
             <View style={{}}>
			 <Image source={{uri: defaultJSONData.urlToImage}} style={{width:'100%',height:120,opacity:0.7, resizeMode:"cover"}}/>
               <Text style={{
                 fontFamily: 'Poppins',
                 fontSize: 18,
                 fontWeight: '500',
                 color: 'white',
				 marginLeft:4,
				marginRight:4,
				textAlign:'center'
               }}>{defaultJSONData.title}</Text>
             </View>
          
			 <View style={{borderBottomWidth: 1, borderColor:'white', paddingTop:2, marginHorizontal:10}}>
			 </View>
             <View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<Text
							style={{
								margin: 5,
								fontStyle: 'italic',
								color: 'white',
								fontSize: 14
							}}
						>
							{defaultJSONData.source.name.toUpperCase()}
						</Text>
						<Text
							style={{
								margin: 5,
								fontStyle: 'italic',
								color: 'white',
								fontSize: 14
							}}
						>
							{time}
						</Text>
					</View>
          </View>
		  </TouchableOpacity>
		 
		 
		)	
	};
export default NewsData;