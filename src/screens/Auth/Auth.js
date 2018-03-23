import React, { Component } from  'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from  'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
	state = {
		viewMode: Dimensions.get('window').height > 650 ? 'landscape': 'portrait',
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
						<DefaultInput placeholder="Input your E-mail Address" style={styles.input} />

						<View style={this.state.viewMode === 'portrait' ? styles.portraitPasswordContainer : styles.landscapePasswordContainer}>
							<View style={this.state.viewMode === 'portrait' ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
								<DefaultInput placeholder="Password" style={styles.input} />
							</View>

							<View style={this.state.viewMode === 'portrait' ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
								<DefaultInput placeholder="Confirm Password" style={styles.input} />
							</View>
						</View>
					</View>

					<ButtonWithBackground 
						onPress={this.loginHandler}
						color="#29AAF4">
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