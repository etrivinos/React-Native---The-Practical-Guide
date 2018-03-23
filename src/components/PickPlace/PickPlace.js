import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class PickPlace extends React.Component {
	render() {
		return (
				<View style={styles.container}>
					<View style={styles.placeholder}>
						<Text>Map</Text>
					</View>

					<View style={styles.button}>
						<Button title="Pick a Place" />
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
	}
});

export default PickPlace;