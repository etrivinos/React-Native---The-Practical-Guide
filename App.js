import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  }

  placeNameChangeHandler = (event) => {
    this.setState({
      placeName: event
    });
  }

  addPlaceName = (event) => {
    let placeName = this.state.placeName;
    alert(placeName);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Ooops! I did it again!!!</Text>
        <Text>Shake your phone to open the developer menu.</Text>

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
            onPress={this.addPlaceName} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 26
  },

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
