import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';

class PlaceDetailScreen extends Component {

	placeDeleteHandler = () => {
		let placeKey = this.props.selectedPlace.key;
		this.props.onDeletePlace(placeKey);

		this.props.navigator.pop({
			animated: true
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Image source={this.props.selectedPlace.image}  style={styles.placeImage} />
					<Text style={styles.placeText}>{this.props.selectedPlace.name}</Text>
				</View>


				<View>
					<View    
						style={styles.deleteButton} >
							<TouchableOpacity onPress={this.placeDeleteHandler}>
								<Icon name="ios-trash" size={30} color="red" />
							</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
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

const mapDispatchToProps = dispatch => {
	return {
		onDeletePlace: (key) => dispatch(deletePlace(key))
	}
}

export default connect(null, mapDispatchToProps)(PlaceDetailScreen);