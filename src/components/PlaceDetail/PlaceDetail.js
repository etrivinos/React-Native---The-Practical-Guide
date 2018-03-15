import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet } from 'react-native';


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
  }
});

export default placeDetail;