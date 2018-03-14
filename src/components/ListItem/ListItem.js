import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback, Image } from 'react-native';

const listItem = (props) => (
	<TouchableNativeFeedback onPress={props.onItemPressed}>
	  <View style={styles.listItem}>
      <Image source={props.placeImage} style={styles.placeImage} />
	    <Text>{props.placeName}</Text>
	  </View>
	</TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#EEE",
    flexDirection: "row",
    alignItems: "center"
  },

  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default listItem;