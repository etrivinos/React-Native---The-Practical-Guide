import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends React.Component {
  state = {
    places: []
  }

  addPlaceName = (placeName) => {
    if(placeName) {
      this.setState(prevState => {
        return {
          places: prevState.places.concat(placeName)
        };
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput addPlaceName={this.addPlaceName} />
        <PlaceList places={this.state.places} />
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
  }
});
