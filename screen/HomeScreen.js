import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { OptionButton, BannerImage } from '../components/';
import { ApitLawang, Calendar, Denah, Home, Standar } from '../assets/icon/';
import { HomeBannerImage } from '../assets/images/';
import { PelinggihScreen, SejarahScreen, DenahScreen } from './';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
		<ScrollView>
			<BannerImage source={ HomeBannerImage }/>
			<View style={styles.navButtonContainer}>
			  <OptionButton
			    image= {ApitLawang}
			    label="Sejarah Pura"
			    onPress={() => navigation.push('Details',{
			    		content: <SejarahScreen/>,
			    		bannerImage: HomeBannerImage,
			    		name: ' Sejarah Pura',
				    })
				}
			  />
			  <OptionButton
			    image={Denah}
			    label="Denah Pura"
			    onPress={() => navigation.push('Details',{
			    		content: <DenahScreen/>,
			    		bannerImage: HomeBannerImage,
			    		name: ' Denah Pura',
				    })
				}
			  />
			  <OptionButton
			    image={Standar}
			    label="Pengenalan Pelinggih"
			    onPress={() => navigation.push('Details',{
			    		content: <PelinggihScreen/>,
			    		bannerImage: HomeBannerImage,
			    		name: 'Pengenalan Pelinggih',
				    })
				}
			  />
			  <OptionButton
			    image={Standar}
			    label="Larangan Arca Pura"
			    onPress={() => navigation.push('Details',{
			    		content: <SejarahScreen/>,
			    		name: 'Larangan Arca Pura',
				    })
				}
			  />
			  <OptionButton
			    image={Standar}
			    label="Upacara Piodalan"
			    onPress={() => navigation.push('Details',{
			    		content: <SejarahScreen/>,
			    		name: 'Upacara Piodalan',
				    })
				}
			  />
			  <OptionButton
			    image={Standar}
			    label="Tahapan Persembahyangan"
			    onPress={() => navigation.push('Details',{
			    		content: <SejarahScreen/>,
			    		name: 'Tahapan Persembahyangan',
				    })
				}
			  />
			  <OptionButton
			    image={Standar}
			    label="Lanskap Subak CAB"
			    onPress={() => navigation.push('Details',{
			    		content: <SejarahScreen/>,
			    		name: 'Lanskap Subak CAB',
				    })
				}
			  />
			  <OptionButton
			    image={Standar}
			    label="About"
			    onPress={() => navigation.push('Details',{
			    		content: <SejarahScreen/>,
			    		name: 'About',
				    })
				}
			  />
			</View>
		</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingHorizontal: 5,
	},

	contentContainer: {
	paddingTop: 20,
	},

	navButtonContainer:{
		paddingTop:15,
	},
});