import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OptionButton } from '../components/';
import { Standar } from '../assets/icon/';

export default function PelinggihScreen ({ navigation }){
	return (
		<View style={styles.navButtonContainer}>
		  <OptionButton
		    image= {Standar}
		    label="Jeroan/Utama Mandala"
		    onPress={() => navigation.push('Details',{
		    		name: 'Jeroan/Utama Mandala',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Jaba Tengah/Madya Mandala"
		    onPress={() => navigation.push('Details',{
		    		name: 'Jaba Tengah/Madya Mandala',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Jaba Sisi/Kanistha Mandala"
		    onPress={() => navigation.push('Details',{
		    		name: 'Jaba Sisi/Kanistha Mandala',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Gedong Penyimpanan Busana"
		    onPress={() => navigation.push('Details',{
		    		name: 'Gedong Penyimpanan Busana',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pewaregan Suci"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pewaregan Suci',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Pangubengan"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pura Pangubengan',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Petangan"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pura Petangan',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pelinggih Wana Kerthi"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pelinggih Wana Kerthi',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Jero Seseh"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pura Jero Seseh',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Beji Saren Kangin"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pura Beji Saren Kangin',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pelinggih Danu"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pelinggih Danu',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Jero Bangbang"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pura Jero Bangbang',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Jero Pakiisan"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pura Jero Pakiisan',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Dalem Kahyangan Batukaru"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pura Dalem Kahyangan Batukaru',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Jero "
		    onPress={() => navigation.push('Details',{
		    		name: 'Pura Jero ',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pelinggih Beji Taksu"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pelinggih Beji Taksu',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pelinggih Apit Lawang"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pelinggih Apit Lawang',
			    })
			}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Jero Taksu"
		    onPress={() => navigation.push('Details',{
		    		name: 'Pura Jero Taksu',
			    })
			}
		  />
		</View>
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