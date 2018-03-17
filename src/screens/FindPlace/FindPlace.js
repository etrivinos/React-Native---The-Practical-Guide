import React, { Component } from  'react';
import { View, Text } from  'react-native';

import { connect } from 'react-redux';

import PlaceList from  '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
	render() {
		return (
			<View>
				<PlaceList places={this.props.places} />
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