import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { BannerImage, OptionButton, HomeButton } from '../components/';

export default function DetailScreen ({ route, navigation }){
	const { content } = route.params;
	const { isBanner } = route.params;
	const { bannerImage } = route.params;
	return (
	<View style={styles.container}>
		<ScrollView>
			{bannerImage && <BannerImage source = {bannerImage}/>}
			<View style={styles.contentContainer}>
			  <View style={styles.content}>{content}</View>
			</View>
		</ScrollView>
		<HomeButton onPress={() => navigation.popToTop()}/>
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
});