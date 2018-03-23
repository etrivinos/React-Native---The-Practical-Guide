import React, { Component } from  'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from  'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {

	render() {
		const iconName = (Platform.OS === 'android') ? "md-log-out" : "ios-log-out";
		
		return (
			<View style={style.container}>
				<TouchableOpacity>
					<View style={style.drawerItem}>
						<Icon 
							name={iconName} 
							size={30} 
							color="#AAA"
							style={style.drawerItemIcon} />

						<Text>Sign Out</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		paddingTop: 50,
		width: Dimensions.get('window').width * 0.8,
		backgroundColor: 'white',
		flex: 1
	},
	drawerItem: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#EEE"
	},
	drawerItemIcon: {
		marginRight: 10
	},
});

export default SideDrawer;