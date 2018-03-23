import React, { Component } from  'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from  'react-native';
import { connect } from 'react-redux';

import PlaceInput from  '../../components/PlaceInput/PlaceInput';
import PickImage from  '../../components/PickImage/PickImage';
import PickPlace from  '../../components/PickPlace/PickPlace';
import { addPlace } from  '../../store/actions/index';

import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';

class SharePlaceScreen extends Component {
	static navigatorStyle = {
		navBarButtonColor: "orange"
	}

	state = {
		placeName: ''
	}

	constructor(props) {
		super(props);
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
	}

	onNavigatorEvent = event => {
		if(event.type === 'NavBarButtonPress') {
			if(event.id = 'sideDrawerToggle') {
				this.props.navigator.toggleDrawer({
					side: 'left',
					animated: true
				});
			}
		}
	}
	
	addPlaceName = () => {
		if(this.state.placeName.trim() !== '') {
			this.props.onAddPlace(this.state.placeName);
		}
	}

	placeNameChangeHandler = (val) => {
		this.setState({
			placeName: val
		});
	}

	render() {
		return (
			<ScrollView >
				<View style={styles.container}>
					<MainText><HeadingText>Share a Place with us!</HeadingText></MainText>

					<PickImage />
					<PickPlace />

					<PlaceInput 
						placeName={this.state.placeName} 
							onChangeText={this.placeNameChangeHandler} />

					<View style={styles.button}>
						<Button title="Share the Place!"
							onPress={this.addPlaceName} />
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center"
	},
	placeholder: {
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#EEE",
		width: "80%",
		height: 150
	},
	button: {
		margin: 8
	},
	previewImage: {
		width: "100%",
		height: "100%"
	}
});

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddPlace: (placeName) => dispatch(addPlace(placeName))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);