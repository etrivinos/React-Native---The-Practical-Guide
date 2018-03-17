import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetailScreen = (props) => {

	return (
			<View style={styles.container}>
				<View>
					<Image source={props.selectedPlace.image}  style={styles.placeImage} />
					<Text style={styles.placeText}>{props.selectedPlace.name}</Text>
				</View>


				<View>
					<View    
						style={styles.deleteButton}
						onPress={props.onItemDeleted} >
							<TouchableOpacity>
								<Icon name="ios-trash" size={30} color="red" />
							</TouchableOpacity>
					</View>
				</View>
			</View>
	);
};


const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    height: 200,
    width: "100%"
  },
  placeText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
  	alignItems: "center"
  }
});

export default placeDetailScreen;