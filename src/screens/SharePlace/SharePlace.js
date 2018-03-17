import React, { Component } from  'react';
import { View, Text } from  'react-native';
import { connect } from 'react-redux';

import PlaceInput from  '../../components/PlaceInput/PlaceInput';
import { addPlace } from  '../../store/actions/index';

class SharePlaceScreen extends Component {
	
	addPlaceName = (placeName) => {
		if(placeName) {
			this.props.onAddPlace(placeName);
		}
	}

	render() {
		return (
			<View>
				<PlaceInput addPlaceName={this.addPlaceName} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddPlace: (placeName) => dispatch(addPlace(placeName))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);