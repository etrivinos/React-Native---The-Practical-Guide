import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

import imagePlaceholder from '../../assets/beautiful-place.jpg';

class PickImage extends React.Component {
	render() {
		return (
				<View style={styles.container}>
					<View style={styles.placeholder}>
						<Image source={imagePlaceholder} style={styles.previewImage} />
					</View>

					<View style={styles.button}>
						<Button title="Pick a Image" />
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