import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

import ImagePicker from 'react-native-image-picker'

class PickImage extends React.Component {

	state = {
		pickedImage: null
	}

	pickImageHandler = () => {
		ImagePicker.showImagePicker({
				title: 'Pick an image',
				// noData: true
			},
			res => {
				if(res.didCancel) {
					console.log("User Canceled!");
				}
				else if(res.error) {
					console.error("Error", res.error);
				}
				else {
					this.setState({
						pickedImage: { uri: res.uri }
					});

					this.props.onImagePick({ uri: res.uri, base64: res.data});
				}
			});
	}

	render() {
		return (
				<View style={styles.container}>
					<View style={styles.placeholder}>
						<Image source={this.state.pickedImage} style={styles.previewImage} />
					</View>

					<View style={styles.button}>
						<Button title="Pick a Image" onPress={this.pickImageHandler} />
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
	button: {
		margin: 8
	},
	previewImage: {
		width: "100%",
		height: "100%"
	}
});

export default PickImage;