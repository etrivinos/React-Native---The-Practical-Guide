import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default class PlaceInput extends React.Component {
	state = {
		placeName: ''
	}

	placeNameChangeHandler = (event) => {
    this.setState({
      placeName: event
    });
  }

  onAddPlaceName = () => {
    if(this.state.placeName.trim() === '') { return; }
    this.props.addPlaceName(this.state.placeName);

    this.setState({
      placeName: ''
    });
  }

	render() {
		return (
				<View style={styles.inputContainer}>
		      <TextInput 
		        style={styles.placeInput}
		        placeholder="An Awesome Place!"
		        placeholderTextColor="#CCC"
		        value={this.state.placeName}
		        onChangeText={this.placeNameChangeHandler} />

		      <Button title="Add"
		        style={styles.placeButton}
		        color="#841584"
		        accessibilityLabel="Learn more about this purple button"
		        onPress={this.onAddPlaceName} />
		    </View>
			)
	}
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  placeInput: {
    width: "70%"
  },

  placeButton: {
    width: "30%"
  }
});