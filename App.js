import React from 'react';
import { StyleSheet, View } from 'react-native';

import { connect } from 'react-redux';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

class App extends React.Component {

  addPlaceName = (placeName) => {
    if(placeName) {
      this.props.onAddPlace(placeName);
    }
  }

  onItemDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  onItemSelectedHandler = (placeKey) => {
    this.props.onSelectPlace(placeKey);
  }

  onModalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {
    return (
      <View style={styles.container}>

        <PlaceInput addPlaceName={this.addPlaceName} />
        <PlaceList places={this.props.places} onItemSelected={this.onItemSelectedHandler} />

        <PlaceDetail selectedPlace={this.props.selectedPlace} 
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

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = (disptach) => {
  return {
    onAddPlace:       (placeName) => disptach(addPlace(placeName)),
    onDeletePlace:    ()          => disptach(deletePlace()),
    onSelectPlace:    (placeKey)  => disptach(selectPlace(placeKey)),
    onDeselectPlace:  ()          => disptach(selectPlace())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);