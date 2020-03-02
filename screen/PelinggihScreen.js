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
		    onPress={() => navigation.navigate('Details')}
		  />
		  <OptionButton
		    image={Standar}
		    label="Jaba Tengah/Madya Mandala"
		    onPress={() => navigation.navigate('Details')}
		  />
		  <OptionButton
		    image={Standar}
		    label="Jaba Sisi/Kanistha Mandala"
		    onPress={() => navigation.navigate('Details')}
		  />
		  <OptionButton
		    image={Standar}
		    label="Gedong Penyimpanan Busana"
		    onPress={() => navigation.navigate('Details')}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pewaregan Suci"
		    onPress={() => navigation.navigate('Details')}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Pangubengan"
		    onPress={() => navigation.navigate('Details')}
		  />
		  <OptionButton
		    image={Standar}
		    label="Pura Petangan"
		    onPress={() => navigation.navigate('Details')}
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