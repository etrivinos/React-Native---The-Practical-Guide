import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
	let places = props.places.map( (place, i) => (
    <ListItem key={i} placeName={place} />
  ));

	return (
	  <View style={styles.listContainer}>
		  {places}
		</View>
	)
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;