import React from 'react';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Image, StyleSheet, Text, View } from 'react-native';

function OptionButton({ image, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <View style={styles.optionIconContainer}>
          <Image
            source= {image}
            style={styles.optionIcon}
          />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  option: {
    paddingVertical:5,
    paddingHorizontal:10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },

  optionIcon:{
    width:40,
    height:40,
  },
});

export default OptionButton;