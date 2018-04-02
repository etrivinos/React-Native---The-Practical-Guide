import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';

import MapView from 'react-native-maps';

class PlaceDetailScreen extends Component {

	state = {
		viewMode: Dimensions.get('window').height < 650 ? 'landscape': 'portrait',
	}

	constructor(props) {
		super(props);
		Dimensions.addEventListener('change', this.updateStyles);
	}

	componentWillUnmount() {
		Dimensions.removeEventListener('change', this.updateStyles);
	}

	updateStyles = (dims) => {
		this.setState({
			viewMode: dims.window.height < 650 ? 'landscape': 'portrait'
		});
	}

	placeDeleteHandler = () => {
		let placeKey = this.props.selectedPlace.key;
		this.props.onDeletePlace(placeKey);

		this.props.navigator.pop({
			animated: true
		});
	}

	render() {
		const focusedLocation = {
			latitude: 			this.props.selectedPlace.location.latitude,
      longitude: 			this.props.selectedPlace.location.longitude,
      latitudeDelta: 	0.0122,
      longitudeDelta: Dimensions.get('window').width /
    									Dimensions.get('window').height * 0.0122
		};

		return (
			<View style={[
				styles.container, 
				this.state.viewMode === 'portrait' ? 
					styles.portraitContainer : 
					styles.landscapeContainer
			]}>
				<View style={styles.subcontainer}>
					<Image source={this.props.selectedPlace.image}  style={styles.placeImage} />
				</View>

				<View style={styles.subcontainer}>
					<MapView style={styles.map}
				    initialRegion={focusedLocation}>
				    	<MapView.Marker coordinate={focusedLocation} />
			    </MapView>
				</View>

				<View style={styles.subcontainer}>
					<View>
						<Text style={styles.placeText}>{this.props.selectedPlace.name}</Text>
					</View>

					<View>
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
    margin: 22,
    flex: 1
  },
  portraitContainer: {
  	flexDirection: "column"
  },
  landscapeContainer: {
  	flexDirection: "row"
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
  },
  subcontainer: {
  	flex: 1,
  	alignItems: "center"
  },
  map: {
		width: "100%",
		height: 150
	}
});

const mapDispatchToProps = dispatch => {
	return {
		onDeletePlace: (key) => dispatch(deletePlace(key))
	}
}

export default connect(null, mapDispatchToProps)(PlaceDetailScreen);