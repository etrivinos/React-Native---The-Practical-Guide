import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
	let places = props.places.map( (place, i) => (
    <ListItem 
    	key={i} 
    	placeName={place} 
    	onItemPressed={() => { props.onItemSelected(i)} } 
    	/>
  ));

	return (
	  <FlatList 
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem 
          placeName={info.item.key + ' - ' + info.item.name} 
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key) }  />
      )} />
	)
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;