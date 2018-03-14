import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

const listItem = (props) => (
	<TouchableNativeFeedback onPress={props.onItemPressed}>
	  <View style={styles.listItem}>
	    <Text>{props.placeName}</Text>
	  </View>
	</TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#EEE",
    margin: 5
  }
});

export default listItem;