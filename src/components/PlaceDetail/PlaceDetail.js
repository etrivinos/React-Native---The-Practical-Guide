import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = (props) => {
	let modalContent = null;

	if(props.selectedPlace) {
		modalContent = (
			<View>
				<Image source={props.selectedPlace.image}  style={styles.placeImage} />
				<Text style={styles.placeText}>{props.selectedPlace.name}</Text>
			</View>
		); 
	}
	return (
		<Modal visible={Boolean(props.selectedPlace)}
			animationType="slide"
			onRequestClose={props.onModalClosed}>
			
			<View style={styles.modalContainer}>
				{modalContent}

				<View>
					<View    
						style={styles.deleteButton}
						onPress={props.onItemDeleted} >
							<TouchableOpacity>
								<Icon name={Platform.OS === 'android' ? "md-trash" : "ios-trash"} size={30} color="red" />
							</TouchableOpacity>
					</View>

					<Button 
						title={'Delete'} 
					 	onPress={props.onItemDeleted} 
						color={'red'} />

					<Button 
						title={'Close'}
						onPress={props.onModalClosed} 
						/>
				</View>
			</View>
		</Modal>
	);
};


const styles = StyleSheet.create({
  modalContainer: {
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

export default placeDetail;