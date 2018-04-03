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
			},
			location: {
				value: null,
				valid: false
			},
			image: {
				value: null,
				valid: false
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
		this.props.onAddPlace(this.state.placeName, this.state.controls.location.value, this.state.controls.image.value);
	}

	placeNameChangeHandler = (val, key) => {
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

	locationPickHandler = (location) => {
		this.setState(prevState => {
			return {
				...prevState,
				controls: {
					...prevState.controls,
					location: {
						value: location,
						valid: true
					}
				}
			}
		});
	}

	imagePickHandler = (uri) => {
		this.setState(prevState => {
			return {
				...prevState,
				controls: {
					...prevState.controls,
					image: {
						value: uri,
						valid: true
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

					<PickImage onImagePick={this.imagePickHandler}/>
					<PickPlace onLocationPick={this.locationPickHandler} />

					<KeyboardAvoidingView style={{flex: 1, width: "100%"}} behavior="padding">
						<PlaceInput 
							style={{width: "100%"}}
							name='placeName'
							placeName={this.state.placeName} 
							onChangeText={(val) => this.placeNameChangeHandler(val, 'placeName')} />

						<View style={[styles.button]}>
							<ButtonWithBackground 
								onPress={this.addPlaceName}
								color="#29AAF4"
								disabled={!this.state.controls.placeName.valid || 
													!this.state.controls.location.valid ||
													!this.state.controls.image.valid}>
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
		onAddPlace: (placeName, location, image) => dispatch(addPlace(placeName, location, image))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);