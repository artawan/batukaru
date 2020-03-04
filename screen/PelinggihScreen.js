import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { OptionButton } from '../components/';
import { Standar } from '../assets/icon/';
import { DetailScreen, SejarahScreen } from '../screen/';

const Stack = createStackNavigator();

function PelinggihOption({ navigation }){
	return(
		<View style={styles.navButtonContainer}>
		  <OptionButton
		    image= {Standar}
		    label="Jeroan/Utama Mandala"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Jeroan/Utama Mandala',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Jaba Tengah/Madya Mandala"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Jaba Tengah/Madya Mandala',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Jaba Sisi/Kanistha Mandala"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Jaba Sisi/Kanistha Mandala',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Gedong Penyimpanan Busana"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Gedong Penyimpanan Busana',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pewaregan Suci"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pewaregan Suci',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Pangubengan"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pura Pangubengan',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Petangan"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pura Petangan',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pelinggih Wana Kerthi"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pelinggih Wana Kerthi',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Jero Seseh"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pura Jero Seseh',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Beji Saren Kangin"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pura Beji Saren Kangin',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pelinggih Danu"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pelinggih Danu',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Jero Bangbang"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pura Jero Bangbang',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Jero Pakiisan"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pura Jero Pakiisan',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Dalem Kahyangan Batukaru"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pura Dalem Kahyangan Batukaru',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Jero "
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pura Jero ',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pelinggih Beji Taksu"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pelinggih Beji Taksu',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pelinggih Apit Lawang"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pelinggih Apit Lawang',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Jero Taksu"
		    onPress={() => navigation.navigate('Details',{
		    		content: <SejarahScreen/>,
		    		name: 'Pura Jero Taksu',
			    })
			}
		  />
		</View>
		)
}

export default function PelinggihScreen ({ navigation }){
	return (
      <PelinggihOption navigation = { navigation }/>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
	paddingTop: 20,
	},

	navButtonContainer:{
		paddingTop:15,
	},
});