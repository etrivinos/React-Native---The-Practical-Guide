import React, { Component } from  'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from  'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import backgroundImage from '../../assets/background.jpg';
import validate from '../../utility/validation';

class AuthScreen extends Component {
	state = {
		viewMode: Dimensions.get('window').height > 650 ? 'landscape': 'portrait',
		controls: {
			email: {
				value: '',
				valid: false,
				touched: false,
				validationRules: {
					isEmail: true
				}
			},
			password: {
				value: '',
				valid: false,
				touched: false,
				validationRules: {
					minLength: 6
				}
			},
			confirmPassword: {
				value: '',
				valid: false,
				touched: false,
				validationRules: {
					equalTo: 'password'
				}
			}
		}
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
			viewMode: dims.window.height > 650 ? 'landscape': 'portrait'
		});
	}

	loginHandler = () => {
		startMainTabs();
	}

	updateInputState = (key, value) => {

		let connectedValue = {};
		if(this.state.controls[key].validationRules.equalTo) {
			const equalControl = this.state.controls[key].validationRules.equalTo;
			const equalValue = this.state.controls[equalControl].value;

			connectedValue = {
				...connectedValue,
				equalTo: equalValue
			}
		}

		this.setState(prevState => {
			let isValid = validate(value, prevState.controls[key].validationRules, connectedValue);

			return {
				controls: {
					...prevState.controls,
					[key]: {
						...prevState.controls[key],
						value: value,
						valid: isValid,
						touched: true
					}
				}
			}
		});
	}

	render() {
		let headingtext = null;
		if(this.state.viewMode === 'portrait') {
			headingtext = (<MainText>
											<HeadingText>Please Log In</HeadingText>
										</MainText>);
		}

		return (
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<View style={styles.container}>
					{headingtext}

					<ButtonWithBackground 
						onPress={() => { alert('Hi!'); }}
						color="#29AAF4">
							Swicth to Login
					</ButtonWithBackground>

					<View style={styles.inputContainer}>
						<DefaultInput 
							placeholder="Input your E-mail Address" 
							style={styles.input}
							value={this.state.controls.email.value}
							onChangeText={(val) => this.updateInputState('email', val) }
							valid={this.state.controls.email.valid}
							touched={this.state.controls.email.touched}
							 />

						<View style={this.state.viewMode === 'portrait' ? styles.portraitPasswordContainer : styles.landscapePasswordContainer}>
							<View style={this.state.viewMode === 'portrait' ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
								<DefaultInput 
									placeholder="Password" 
									style={styles.input}
									value={this.state.controls.password.value}
									onChangeText={(val) => this.updateInputState('password', val) }
									valid={this.state.controls.password.valid} 
									touched={this.state.controls.password.touched}
									/>
							</View>

							<View style={this.state.viewMode === 'portrait' ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
								<DefaultInput 
									placeholder="Confirm Password" style={styles.input} 
									value={this.state.controls.confirmPassword.value}
									onChangeText={(val) => this.updateInputState('confirmPassword', val) }
									valid={this.state.controls.confirmPassword.valid}
									touched={this.state.controls.confirmPassword.touched}
								/>
							</View>
						</View>
					</View>

					<ButtonWithBackground 
						onPress={this.loginHandler}
						color="#29AAF4"
						disabled={
							!this.state.controls.email.valid ||
							!this.state.controls.password.valid ||
							!this.state.controls.confirmPassword.valid
						}>
							Submit
					</ButtonWithBackground>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	inputContainer: {
		width: "80%"
	},
	input: {
		backgroundColor: "#EEE",
		borderColor: "#BBB"
	},
	backgroundImage: {
		width: "100%",
		flex: 1
	},
	landscapePasswordContainer: {
		flexDirection: 'column',
		justifyContent: "space-between"
	},
	portraitPasswordContainer: {
		flexDirection: 'row',
		justifyContent: "space-between"
	},
	landscapePasswordWrapper: {
		width: '100%'
	},
	portraitPasswordWrapper: {
		width: '45%'
	}
});

export default AuthScreen;