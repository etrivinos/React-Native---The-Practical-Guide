import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: false
  }

  addPlaceName = (placeName) => {
    if(placeName) {
      this.setState(prevState => {
        return {
          places: prevState.places.concat({
            key: prevState.places.length, 
            name: placeName,
            image: {
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlwIFIXM3b8gS_PLPG0raP33M_jTRFxxhpFP7YcLIF_BtWzeZ"
            }
          })
        };
      });
    }
  }

  onItemDeletedHandler = () => {
    this.setState(prevState => {
      prevState.places.splice(this.state.selectedPlace.key, 1);
      
      return {
        places: prevState.places,
        selectedPlace: null
      };
    });
  }

  onItemSelectedHandler = (i) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places[i]
      };
    });
  }

  onModalClosedHandler = () => {
    this.setState(prevState => {
      return {
        selectedPlace: null
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <PlaceInput addPlaceName={this.addPlaceName} />
        <PlaceList places={this.state.places} onItemSelected={this.onItemSelectedHandler} />

        <PlaceDetail selectedPlace={this.state.selectedPlace} 
          onItemDeleted={this.onItemDeletedHandler}
          onModalClosed={this.onModalClosedHandler} />
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
