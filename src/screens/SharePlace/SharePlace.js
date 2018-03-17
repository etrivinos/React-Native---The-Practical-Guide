import React, { Component } from  'react';
import { View, Text } from  'react-native';
import { connect } from 'react-redux';

import PlaceInput from  '../../components/PlaceInput/PlaceInput';
import { addPlace } from  '../../store/actions/index';

class SharePlaceScreen extends Component {

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