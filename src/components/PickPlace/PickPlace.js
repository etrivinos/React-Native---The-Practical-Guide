import React from 'react';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';

import MapView from 'react-native-maps';

class PickPlace extends React.Component {
	state = {
		focusedLocation: {
			latitude: 			37.7900352,
      longitude: 			-122.4013276,
      latitudeDelta: 	0.0122,
      longitudeDelta: Dimensions.get('window').width /
      									Dimensions.get('window').height * 0.0122
		},
		locationChosen: false
	}

	pickLocationHandler = (event) => {
		const coords = event.nativeEvent.coordinate;

		this.map.animateToRegion({
			...this.state.focusedLocation,
			latitude: coords.latitude,
			longitude: coords.longitude
		});

		this.setState(prevState => {
			return {
				focusedLocation: {
					...prevState.focusedLocation,
					latitude: 	coords.latitude,
					longitude: 	coords.longitude
				},
				locationChosen: true
			}
		});

		this.props.onLocationPick({
			longitude: 	coords.latitude,
			latitude: 	coords.longitude
		});
	}

	getLocationHandler = () => {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const coordsEvent = {
					nativeEvent: {
						coordinate: {
							latitude: 	pos.coords.latitude,
							longitude: 	pos.coords.longitude
						}
					}
				};

				this.pickLocationHandler(coordsEvent);
			},
			(error) => {
				console.error(error);
				alert('Fetching the Position failed, please pick one manually!');
			}
		);
	}

	render() {
		let marker = null;

		if(this.state.locationChosen) {
			marker = <MapView.Marker coordinate={this.state.focusedLocation} />
		}

		// region={this.state.focusedLocation}

		return (
				<View style={styles.container}>
					<MapView style={styles.map}
				    initialRegion={this.state.focusedLocation}
				    onPress={this.pickLocationHandler}
				    ref={ref => this.map = ref}>
				    	{marker}
			    </MapView>

					<View style={styles.button}>
						<Button title="Locate me!" onPress={this.getLocationHandler} />
					</View>
				</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		width: "100%"
	},
	placeholder: {
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#EEE",
		width: "80%",
		height: 150
	},
	map: {
		width: "100%",
		height: 250
	},
	button: {
		margin: 8
	}
});

export default PickPlace;