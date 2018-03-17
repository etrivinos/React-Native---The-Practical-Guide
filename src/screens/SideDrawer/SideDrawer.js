import React, { Component } from  'react';
import { View, Text, Dimensions, StyleSheet } from  'react-native';

class SideDrawer extends Component {
	render() {
		return (
			<View style={style.container}>
				<Text>SideDrawer Screen</Text>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		padding: 15,
		width: Dimensions.get('window').width * 0.8,
		backgroundColor: 'white',
		flex: 1
	}
});

export default SideDrawer;