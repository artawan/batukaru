import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SejarahScreen ({ navigation }){
	return (
		<View style={styles.contentContainer}>
		  <Text style={styles.contentTitle}>Sejarah Pura Luhur Batukaru</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		paddingTop: 20,
	},
});