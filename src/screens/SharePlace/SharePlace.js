import React, { Component } from  'react';

import { 
	View, 
	Text, 
	TextInput, 
	Button, 
	Image, 
	StyleSheet, 
	ScrollView,
	KeyboardAvoidingView } from  'react-native';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import { connect } from 'react-redux';

import PlaceInput from  '../../components/PlaceInput/PlaceInput';
import PickImage from  '../../components/PickImage/PickImage';
import PickPlace from  '../../components/PickPlace/PickPlace';
import { addPlace } from  '../../store/actions/index';

import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';

import validate from '../../utility/validation';

class SharePlaceScreen extends Component {
	static navigatorStyle = {
		navBarButtonColor: "orange"
	}

	state = {
		placeName: '',
		controls: {
			placeName: {
				value: '',
				valid: false,
				touched: false,
				validationRules: {
					isNotEmpty: true
				}
			}			
		}
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

	placeNameChangeHandler = (val, key) => {
		console.log(this.state.controls);

		let isValid = validate(val, this.state.controls[key].validationRules);

		this.setState(prevState => {
			return {
				placeName: val,
				controls: {
					...prevState.controls,
					[key]: {
						...prevState.controls[key],
						value: val,
						valid: isValid,
						touched: true
					}
				}
			}
		});
	}

	render() {
		return (
			<ScrollView >
				<View style={styles.container}>
					<MainText><HeadingText>Share a Place with us!</HeadingText></MainText>

					<PickImage />
					<PickPlace />

					<KeyboardAvoidingView style={{flex: 1, width: "100%"}} behavior="padding">
						<PlaceInput 
							style={{width: "100%"}}
							name='placeName'
							placeName={this.state.placeName} 
							onChangeText={this.placeNameChangeHandler} />

						<View style={[styles.button]}>
							<ButtonWithBackground 
								onPress={this.addPlaceName}
								color="#29AAF4"
								disabled={!this.state.controls.placeName.valid}>
									Share the Place!									
							</ButtonWithBackground>
						</View>
					</KeyboardAvoidingView>
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
	},

	disabled: {
    backgroundColor: "#EEE",
    borderColor: "#AAA",
    color: '#AAA'
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