import React, { Component } from  'react';
import { View, Text } from  'react-native';

import { connect } from 'react-redux';

import PlaceList from  '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {

	static navigatorStyle = {
		navBarButtonColor: "orange"
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

	onItemSelectedHanlder = (placeKey) => {
		const place = this.props.places.find(place => {
									return place.key === placeKey;
								});

		this.props.navigator.push({
			screen: 'rn-course.PlaceDetailScreen',
			title: place.name,
			passProps: {
				selectedPlace: place
			}
		});
	}

	render() {
		return (
			<View>
				<PlaceList places={this.props.places}
					onItemSelected={this.onItemSelectedHanlder} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		places: state.places.places
	}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);